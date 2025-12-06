const express = require('express');
const router = express.Router();
const db = require('./db');

// GET all dosen (with filter, sorting, pagination)
router.get('/', (req, res) => {
  const { prodi, sort, order = 'ASC', page = 1, limit = 10 } = req.query;

  let offset = (page - 1) * limit;
  let sql = "SELECT * FROM dosen WHERE 1=1";

  if (prodi) sql += ` AND prodi = '${prodi}'`;
  if (sort) sql += ` ORDER BY ${sort} ${order}`;

  sql += ` LIMIT ${limit} OFFSET ${offset}`;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: err });
    res.json(results);
  });
});

// GET by NIDN
router.get('/:nidn', (req, res) => {
  db.query(
    'SELECT * FROM dosen WHERE nidn = ?',
    [req.params.nidn],
    (err, result) => {
      if (err) return res.status(500).json({ message: err });
      if (result.length === 0) return res.status(404).json({ message: 'Dosen tidak ditemukan' });
      res.json(result[0]);
    }
  );
});

// POST (create)
router.post('/', (req, res) => {
  const data = req.body;

  db.query('INSERT INTO dosen SET ?', data, (err, result) => {
    if (err) return res.status(500).json({ message: err });
    res.json({ message: 'Dosen berhasil ditambahkan', nidn: data.nidn });
  });
});

// PUT (update)
router.put('/:nidn', (req, res) => {
  db.query(
    'UPDATE dosen SET ? WHERE nidn = ?',
    [req.body, req.params.nidn],
    (err, result) => {
      if (err) return res.status(500).json({ message: err });
      res.json({ message: 'Data dosen berhasil diupdate' });
    }
  );
});

// DELETE
router.delete('/:nidn', (req, res) => {
  db.query(
    'DELETE FROM dosen WHERE nidn = ?',
    [req.params.nidn],
    (err, result) => {
      if (err) return res.status(500).json({ message: err });
      res.json({ message: 'Dosen berhasil dihapus' });
    }
  );
});

module.exports = router;