var async = require('async');

exports.up = function (db, callback) {
    async.series([
        function(cb) {
            db.runSql(
                'CREATE TABLE IF NOT EXISTS zoo ' +
                '(' +
                '   id int NOT NULL AUTO_INCREMENT PRIMARY KEY, ' +
                '   name varchar(255), ' +
                '   created_at TIMESTAMP DEFAULT "0000-00-00 00:00:00", ' +
                '   updated_at TIMESTAMP DEFAULT now() ON UPDATE now()' +
                ');',
            cb);
        },
        function(cb) {
            db.runSql(
                'CREATE TABLE IF NOT EXISTS staff_member ' +
                '(' +
                '   id int NOT NULL AUTO_INCREMENT PRIMARY KEY, ' +
                '   name varchar(255), ' +
                '   zoo_id int NOT NULL, ' +
                '   created_at TIMESTAMP DEFAULT "0000-00-00 00:00:00", ' +
                '   updated_at TIMESTAMP DEFAULT now() ON UPDATE now(), ' +
                '   FOREIGN KEY (zoo_id) REFERENCES zoo(id)' +
                ');',
            cb);
        },
        function(cb) {
            db.runSql(
                'CREATE TABLE IF NOT EXISTS animal ' +
                '(' +
                '   id int NOT NULL AUTO_INCREMENT PRIMARY KEY, ' +
                '   name varchar(255), ' +
                '   zoo_id int NOT NULL, ' +
                '   created_at TIMESTAMP DEFAULT "0000-00-00 00:00:00", ' +
                '   updated_at TIMESTAMP DEFAULT now() ON UPDATE now(), ' +
                '   FOREIGN KEY (zoo_id) REFERENCES zoo(id)' +
                ');',
            cb);
        },
        function(cb) {
            db.runSql(
                'CREATE TABLE IF NOT EXISTS opening_time ' +
                '(' +
                '   id int NOT NULL AUTO_INCREMENT PRIMARY KEY, ' +
                '   zoo_id int NOT NULL, ' +
                '   weekday int NOT NULL, ' +
                '   open_at TIME, ' +
                '   close_at TIME, ' +
                '   created_at TIMESTAMP DEFAULT "0000-00-00 00:00:00", ' +
                '   updated_at TIMESTAMP DEFAULT now() ON UPDATE now(), ' +
                '   FOREIGN KEY (zoo_id) REFERENCES zoo(id)' +
                ');',
            cb);
        },
        function(cb) {
            db.runSql(
                'CREATE TABLE IF NOT EXISTS staff_schedule_entry ' +
                '(' +
                '   id int NOT NULL AUTO_INCREMENT PRIMARY KEY, ' +
                '   zoo_id int NOT NULL, ' +
                '   staff_member_id int NOT NULL, ' +
                '   weekday int NOT NULL, ' +
                '   created_at TIMESTAMP DEFAULT "0000-00-00 00:00:00", ' +
                '   updated_at TIMESTAMP DEFAULT now() ON UPDATE now(), ' +
                '   FOREIGN KEY (zoo_id) REFERENCES zoo(id), ' +
                '   FOREIGN KEY (staff_member_id) REFERENCES staff_member(id)' +
                ');',
            cb);
        },
    ], callback);
};

exports.down = function (db, callback) {
    async.series([
        function(cb) {
            db.runSql("DROP TABLE IF EXISTS staff_schedule_entry, opening_time, staff_member, animal, zoo;", cb);
        }
    ], callback);
};