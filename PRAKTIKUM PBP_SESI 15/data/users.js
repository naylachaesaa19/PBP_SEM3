const bcrypt = require('bcryptjs');

module.exports = [
  {
    id: 1,
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    role: "admin"
  },
  {
    id: 2,
    email: "user@email.com",
    password: bcrypt.hashSync("password", 10),
    role: "user"
  },
  {
    id: 3,
    email: "staff@email.com",
    password: bcrypt.hashSync("staff123", 10),
    role: "staff"
  }
];
