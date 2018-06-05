var async = require("async");

exports.up = function (db, callback) {
    async.series([
        function(cb) {
            db.runSql(
                "INSERT INTO zoo " +
                "  (name, created_at)" +
                "VALUES " +
                "  ('Awesome Zoo', CURRENT_TIMESTAMP());",
            cb);
        },
        function(cb) {
            db.runSql(
                "INSERT INTO staff_member " +
                "  (name, zoo_id, created_at)" +
                "VALUES " +
                "  ('Sean Charboneau', 1, CURRENT_TIMESTAMP()), " +
                "  ('Sam Vimes', 1, CURRENT_TIMESTAMP()), " +
                "  ('Anomander Rake', 1, CURRENT_TIMESTAMP()), " +
                "  ('Mat Cauthon', 1, CURRENT_TIMESTAMP()), " +
                "  ('Frodo Baggins', 1, CURRENT_TIMESTAMP());",
            cb);
        },
        function(cb) {
            db.runSql(
                "INSERT INTO animal " +
                "  (name, zoo_id, created_at)" +
                "VALUES " +
                "  ('Red Panda', 1, CURRENT_TIMESTAMP()), " +
                "  ('Polar Bear', 1, CURRENT_TIMESTAMP()), " +
                "  ('Black Panther', 1, CURRENT_TIMESTAMP()), " +
                "  ('Meerkat', 1, CURRENT_TIMESTAMP()), " +
                "  ('Fennec Fox', 1, CURRENT_TIMESTAMP());",
            cb);
        },
        function(cb) {
            db.runSql(
                "INSERT INTO opening_time " +
                "  (zoo_id, weekday, open_at, close_at, created_at)" +
                "VALUES " +
                "  (1, 1, '10:00:00', '16:00:00', CURRENT_TIMESTAMP()), " +
                "  (1, 2, '08:00:00', '20:00:00', CURRENT_TIMESTAMP()), " +
                "  (1, 3, '08:00:00', '20:00:00', CURRENT_TIMESTAMP()), " +
                "  (1, 4, '08:00:00', '20:00:00', CURRENT_TIMESTAMP()), " +
                "  (1, 5, '08:00:00', '22:00:00', CURRENT_TIMESTAMP()), " +
                "  (1, 6, '08:00:00', '22:00:00', CURRENT_TIMESTAMP()), " +
                "  (1, 7, '08:00:00', '20:00:00', CURRENT_TIMESTAMP());",
            cb);
        },
        function(cb) {
            db.runSql(
                "INSERT INTO staff_schedule_entry " +
                "  (zoo_id, staff_member_id, weekday, created_at)" +
                "VALUES " +
                "  (1, 1, 1, CURRENT_TIMESTAMP()), " +
                "  (1, 2, 2, CURRENT_TIMESTAMP()), " +
                "  (1, 3, 2, CURRENT_TIMESTAMP()), " +
                "  (1, 4, 3, CURRENT_TIMESTAMP()), " +
                "  (1, 5, 3, CURRENT_TIMESTAMP()), " +
                "  (1, 1, 4, CURRENT_TIMESTAMP()), " +
                "  (1, 2, 5, CURRENT_TIMESTAMP()), " +
                "  (1, 3, 6, CURRENT_TIMESTAMP()), " +
                "  (1, 4, 7, CURRENT_TIMESTAMP());",
            cb);
        },
    ], callback);
};

exports.down = function (db, callback) {
    async.series([
      function(cb) {
          db.runSql("DELETE FROM staff_schedule_entry;", cb);
      },
      function(cb) {
          db.runSql("DELETE FROM opening_time;", cb);
      },
      function(cb) {
          db.runSql("DELETE FROM animal;", cb);
      },
      function(cb) {
          db.runSql("DELETE FROM staff_member;", cb);
      },
      function(cb) {
          db.runSql("DELETE FROM zoo;", cb);
      },
    ], callback);
};