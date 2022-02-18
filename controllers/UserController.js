//const UserService = require("../services/user.service");
const db = require("../db/conn");

exports.getUsers = async function (req, res) {
  const db_connect = db.getDb("ExpenseTrackerDb");
  await db_connect
    .collection("Users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
};
