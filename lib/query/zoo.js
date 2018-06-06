var db = require('../../db.js');

var addAnimal = exports.addAnimal = function(zooId, animalName, callback) {
    db.runQuery(
        "INSERT INTO animal (zoo_id, name, created_at) " + 
        "VALUES " +
        "(?, ?, CURRENT_TIMESTAMP());",
        [zooId, animalName],
    callback);
};


var getAnimalList = exports.getAnimalList = function(zooId, callback) {
    db.runQuery(
        "SELECT id, name, zoo_id, created_at " +
        "FROM animal " +
        "WHERE zoo_id = ?;",
        [zooId],
    callback);
};

var getSchedule = exports.getSchedule = function(zooId, callback) {
    db.runQuery(
        "SELECT sm.name AS name, sse.weekday AS day, ot.open_at AS open, ot.close_at AS close " +
        "FROM " +
        "staff_schedule_entry sse " +
        "INNER JOIN opening_time ot " +
        "ON sse.zoo_id = ot.zoo_id AND sse.weekday = ot.weekday " +
        "LEFT JOIN staff_member sm ON sm.id = sse.staff_member_id " + 
        "WHERE sse.zoo_id = ?;",
        [zooId],
    callback);
};

var getStaffList = exports.getStaffList = function(zooId, callback) {
    db.runQuery(
        "SELECT id, name, zoo_id, created_at " +
        "FROM staff_member " +
        "WHERE zoo_id = ?;",
        [zooId],
    callback);
};

var getZooInfo = exports.getZooInfo = function(zooId, callback) {
    db.runQuery(
        "SELECT id, name, created_at " + 
        "FROM zoo " +
        "WHERE id = ?;",
        [zooId],
    callback);
};

var removeAnimal = exports.removeAnimal = function(animalId, callback) {
    db.runQuery(
        "DELETE " + 
        "FROM animal " +
        "WHERE id = ?;",
        [animalId],
    callback);
};

