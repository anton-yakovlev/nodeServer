const db = require('../db');
const ObjectId = require('mongodb').ObjectID;

exports.all = function (cb) {
    db.get().collection('artists').find().toArray(function (error, result) {
        cb(error, result);
    })
};

exports.findById = function (id, cb) {
    db.get().collection('artists').findOne({_id: ObjectId(id)}, function (error, result) {
        cb(error, result);
    })
};

exports.updateById = function (id, name, cb) {
    db.get().collection('artists').updateOne(
        {_id: ObjectId(id)},
        {name: name},
        function (error, result) {
            cb(error, result);
        })
};

exports.deleteById = function (id, cb) {
    db.get().collection('artists').deleteOne(
        {_id: ObjectId(id)},
        function (error, result) {
            cb(error, result);
        })
};

exports.new = function (name, cb) {
    db.get().collection('artists').insert(
        {name: name},
        function (error, result) {
            cb(error, result);
        })
};
