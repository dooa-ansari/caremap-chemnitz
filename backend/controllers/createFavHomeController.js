require("dotenv").config();
const db = require("../db");

const addUserFavHomes = async function (req, res) {
  try {
    const userid = req.query.userid;
    const address = req.body.data;

    if (!userid)
      return res
        .status(400)
        .json({ message: "Userid is required in parameters" });

    let insertHomes =
      "INSERT INTO homes (userid, address, uuid, isfav)  values ( ? , ?, ?, false)";
    const [results, fields] = await db.query(insertHomes, [
      userid,
      address.text,
      address.uuid,
    ]);
    if (results.insertId) {
      return res
        .status(201)
        .json({
          message: "User Homes Added successfuly",
          data: { id: results.insertId },
        });
    } else {
      return res
        .status(400)
        .json({ message: "Failed to add new home address" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errorMessage: error,
      message: "Failed to add Homes. Internal Server Error",
    });
  }
};

module.exports = addUserFavHomes;
