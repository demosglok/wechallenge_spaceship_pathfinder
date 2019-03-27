const debug = require('debug')('wechallenge:findPathController');


const loadData = require('../utils/loadDataFile');
const config = require('../../config');

const gateData = loadData(config.gatesInitFile);
const findAllPathes = require('../utils/findGatePath').findAllPathes;
const SpaceshipRequestModel = require('../models/spaceshipHistoryModel');

module.exports = (req, res) => {
	try {
		const shipId = req.query.spaceship;
		const sector =  req.query.sector;

		if(shipId && sector) {
			const pathes = findAllPathes(gateData, sector);
			const shipRequest = new SpaceshipRequestModel();
			shipRequest.spaceshipId = shipId
			shipRequest.sector = sector;
			shipRequest.pathes = pathes;
			shipRequest.createdAt = Date.now();
			shipRequest.save()
				.then(() => debug('ship',shipId,' request for sector ', sector, 'saved'))
				.catch((ex) => {
					debug('error saving shipRequest', ex.message);
				})
			res.json(pathes);
		} else if(!shipId) {
			debug('Error, no shipId');
			res.status(400);
			res.json({error: 'spaceship query parameter is not specified'})
		} else {
			debug('Error, no sector');
			res.status(400);
			res.json({error: 'sector query parameter is not specified'})
		}
	}
	catch (ex) {
		debug('exception', ex.message);
		res.status(500);
		res.json({error: 'exception happened while handling your request'});
	}
}
