const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('../data/users');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validasi input
  if (!email || !password) {
    return res.status(400).json({
      error: "Email dan password wajib diisi"
    });
  }

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ error: "Login gagal" });
  }

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: "Login gagal" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES }
  );

  res.json({
    message: "Login berhasil",
    token
  });
});

module.exports = router;