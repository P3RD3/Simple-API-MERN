
const pingUsers = (req, res) => {
    res.status(200).json({ message: "Ping!" });
  };

module.exports = pingUsers;