const MongoClient = require('mongodb').MongoClient;

let state = {
    db: null
};

exports.connect = function (url, done) {
  if (state.db) {
      return done();
  }

    MongoClient.connect(url, function (error, db) {
        if (error) {
            console.error(error);
        }

        state.db = db;
        done();
    });
};

exports.get = function () {
  return state.db;
};
