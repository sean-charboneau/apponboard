var zooQuery = require('../query/zoo');

var addAnimal = exports.addAnimal = function(zooId, animalName, callback) {
    zooQuery.addAnimal(zooId, animalName, function(err, results) {
        if(err) {
            return callback(err);
        }
        return getAnimalList(zooId, callback);
    });
};

var getAnimalList = exports.getAnimalList = function(zooId, callback) {
    zooQuery.getAnimalList(zooId, callback);
};

var getSchedule = exports.getSchedule = function(zooId, callback) {
    zooQuery.getSchedule(zooId, function(err, results) {
        if(err) {
            return callback(err);
        }

        var dayMap = {
            "1": "Monday",
            "2": "Tuesday",
            "3": "Wednesday",
            "4": "Thursday",
            "5": "Friday",
            "6": "Saturday",
            "7": "Sunday"
        };

        var ret = {};

        for(var i = 0; i < results.length; i++) {
            var row = results[i];
            var day = dayMap[row.day];
            if(!ret[day]) {
                ret[day] = {
                    open: row.open,
                    close: row.close,
                    employees: [row.name]
                }
            }
            else {
                ret[day].employees.push(row.name);
            }
        }

        return callback(null, ret);
    })
}

var getStaffList = exports.getStaffList = function(zooId, callback) {
    zooQuery.getStaffList(zooId, callback);
};

var getZooInfo = exports.getZooInfo = function(zooId, callback) {
    zooQuery.getZooInfo(zooId, function(err, results) {
        if(err) {
            return callback(err);
        }
        return callback(null, results[0]);
    });
};

var removeAnimal = exports.removeAnimal = function(animalId, zooId, callback) {
    zooQuery.removeAnimal(animalId, function(err, results) {
        if(err) {
            return callback(err);
        }
        return getAnimalList(zooId, callback);
    });
};