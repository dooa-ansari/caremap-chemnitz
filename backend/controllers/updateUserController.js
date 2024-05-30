const updateUser = async function (req, res) {
  try {
    const { userid } = req.query.userid;
    const {
      first_name,
      last_name,
      age,
      marital_status,
      children,
      address,
      zipcode,
      birthdate,
      gender,
    } = req.body.user;

    if (!userid)
      return res
        .status(400)
        .json({ message: "user id is required in parameters" });

    let updateUsers =
      "UPDATE users SET first_name = ?, last_name = ?, age = ? , marital_status = ?, children = ?, address = ?, zipcode = ?, birthdate = ?, gender = ? WHERE id = ?;";
    const [rows] = await db.query(updateUsers, [
      first_name,
      last_name,
      age,
      marital_status,
      children,
      address,
      zipcode,
      birthdate,
      gender,
      userid,
    ]);
    if (rows.length == 1) {
      const users = rows[0];
      console.log(users);
      return res
        .status(200)
        .json({ message: "User updated successfuly", users });
    } else {
      return res.status(400).json({ message: "Failed to update user" });
    }
  } catch (error) {
    return res.status(500).json({
      errorMessage: error,
      message: "Failed to update user. Internal Server Error",
    });
  }
};

module.exports = updateUser;
