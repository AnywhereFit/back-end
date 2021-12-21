const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../api/secrets");

function generateToken(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
    // how about role?
  };

  const options = {
    expiresIn: "1d",
  };

  const token = jwt.sign(payload, JWT_SECRET, options);

  return token;
}

module.exports = generateToken;