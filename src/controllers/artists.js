const Artists = require('../modules/artists');

exports.all = function (req, res) {
    Artists.all(function (error, result) {
        if (error) {
            console.error(error);
            return res.sendStatus(500);
        }
        res.send(result);
    });
};

exports.findById = function (req, res) {
    Artists.findById(req.params.id, function (error, result) {
        if (error) {
            console.error(error);
            return res.sendStatus(500);
        }
        res.send(result);
    });
};

exports.updateById = function (req, res) {
    Artists.updateById(req.params.id, req.body.name, function (error) {
            if (error) {
                console.error(error);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    );
};

exports.deleteById = function (req, res) {
    Artists.deleteById(req.params.id, function (error) {
            if (error) {
                console.error(error);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    );
};

exports.new = function (req, res) {
    Artists.new(req.body.name, function (error) {
            if (error) {
                console.error(error);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    );
};
