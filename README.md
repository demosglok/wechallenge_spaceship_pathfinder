# wechallenge_spaceship_pathfinder
challenge task for wechallenge (devchallenge) contests. nodejs spaceships path finder


# Run

 - docker-compose up
 - open http://localhost:8080 in browser
 - try http://localhost:8080/path?sector=5&spaceship=2 to see possible results for sector 5 and spaceship 2
 - try few more queries, like http://localhost:8080/path?sector=56&spaceship=2 and http://localhost:8080/path?sector=56&spaceship=3
 - open http://localhost:8080/spaceship to see latest sectors for all spaceships
 - open http://localhost:8080/spaceship/2 to see queries of spaceship 2


# Run locally
 - you need nodejs installed
 - you need mongo installed (i.e. in docker)
 - cp .env.example .env
 - edit .env to set MONGO_URL or set MONGO_URL environment variable
 - npm i
 - npm start

# Run tests
 - npm test
 - npm run test-integration

# notes
  tests are very simplistics.
  only core functionality covered in unit contests
  only one query tested in integration tests
  more test should be written for integration - to test exceptions, errors, edge cases
  also integration tests should cover scenarious - what data appears on /spaceship endpoint after calls to /path endpoint
