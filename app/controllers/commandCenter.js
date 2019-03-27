const debug = require('debug')('wechallenge:commandCenterController');
const SpaceshipHistoryModel = require('../models/spaceshipHistoryModel');

module.exports = {
	spaceshipsList,
	spaceshipsListCSV,
	spaceshipHistory
}

async function spaceshipsList(req, res) {
	try {
		const ships = await SpaceshipHistoryModel.aggregate([
			{$sort: {createdAt: 1}},
			{$group: {_id: "$spaceshipId", sector: {$last: '$sector'}}},
			{$project: {spaceshipId: '$_id', sector: 1}}
		]);
		res.json({ships});
	} catch(ex) {
		debug('exception getting spaceships', ex.message);
		res.status(500);
		res.json({error: 'error happened during processing your request'});
	}
}
async function spaceshipsListCSV(req, res) {
	try {
		const ships = await SpaceshipHistoryModel.aggregate([
			{$sort: {createdAt: 1}},
			{$group: {_id: "$spaceshipId", sector: {$last: '$sector'}}},
			{$project: {spaceshipId: '$_id', sector: 1}}
		]);
		
		const csv = "shipId, sector\n" + ships.map(ship => `${ship.spaceshipId},${ship.sector}`).join("\n");
		res.setHeader('Content-disposition', 'attachment; filename=ships.csv');
		res.setHeader('Content-type', 'text/csv');
		res.charset = 'UTF-8';
		res.send(csv);
	} catch(ex) {
		debug('exception getting spaceships', ex.message);
		res.status(500);
		res.json({error: 'error happened during processing your request'});
	}
}

async function spaceshipHistory(req, res) {
	const spaceshipId = req.params.id;
	if(spaceshipId) {
		try {
			const shipHistory = await SpaceshipHistoryModel.find({spaceshipId}).sort({createdAt: 1}).select('spaceshipId sector pathes createdAt').lean();
			res.json(shipHistory);
		} catch(ex) {
			debug('exception getting spaceships', ex.message);
			res.status(500);
			res.json({error: ' exception happened during processing your request'})
		}
	} else {
		res.status(400);
		res.json({error: 'missin :id parameted in url '});
	}
}