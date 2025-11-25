const express = require('express');
const app = express();
const db = require('./db');
app.use(express.json());

app.get('/produk', (req, res) => {
    const min = req.query.min;
    const max = req.query.max;

    // Jika user menggunakan filter harga
    if (min && max) {
        const sql = "SELECT * FROM produk WHERE harga BETWEEN ? AND ?";

        db.query(sql, [min, max], (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: "error",
                    message: "Terjadi kesalahan pada server",
                    detail: err
                });
            }
            return res.json({
                status: "success",
                message: `Produk dengan harga antara ${min} - ${max}`,
                data: results
            });
        });

    } else {
        // Jika TIDAK pakai filter → tampilkan semua produk
        db.query('SELECT * FROM produk', (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: "error",
                    message: "Gagal mengambil data produk"
                });
            }
            res.json({
                status: "success",
                data: results
            });
        });
    }
});

   //GET Produk 
app.get('/produk/:id', (req, res) => {
    const id = req.params.id;

    db.query('SELECT * FROM produk WHERE id_produk = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                status: "error",
                message: "Terjadi kesalahan pada server"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                status: "failed",
                message: "Produk tidak ditemukan"
            });
        }

        res.json({
            status: "success",
            data: results[0]
        });
    });
});

   //POST Tambah Produk
app.post('/produk', (req, res) => {
    const { nama_produk, jml_stock, harga } = req.body;

    // validasi input kosong
    if (!nama_produk || !jml_stock || !harga) {
        return res.status(400).json({
            status: "failed",
            message: "Input tidak lengkap: nama_produk, jml_stock, dan harga wajib diisi"
        });
    }

    // validasi harga harus angka
    if (isNaN(harga)) {
        return res.status(400).json({
            status: "failed",
            message: "Harga harus berupa angka"
        });
    }

    db.query(
        'INSERT INTO produk (nama_produk, jml_stock, harga) VALUES (?,?,?)',
        [nama_produk, jml_stock, harga],
        (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: "error",
                    message: "Gagal menambahkan produk",
                    detail: err
                });
            }

            res.json({
                status: "success",
                message: "Produk berhasil ditambahkan",
                id: results.insertId
            });
        }
    );
});


   // PUT Update Produk
app.put('/produk/:id', (req, res) => {
    const id = req.params.id;
    const { nama_produk, jml_stock, harga } = req.body;

    // validasi harga harus angka
    if (harga && isNaN(harga)) {
        return res.status(400).json({
            status: "failed",
            message: "Harga harus angka"
        });
    }

    db.query(
        'UPDATE produk SET nama_produk=?, jml_stock=?, harga=? WHERE id_produk=?',
        [nama_produk, jml_stock, harga, id],
        (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: "error",
                    message: "Gagal memperbarui produk"
                });
            }

            if (results.affectedRows === 0) {
                return res.status(404).json({
                    status: "failed",
                    message: "ID produk tidak ditemukan"
                });
            }

            res.json({
                status: "success",
                message: "Produk berhasil diperbarui"
            });
        }
    );
});

   // DELETE Produk
app.delete('/produk/:id', (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM produk WHERE id_produk=?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                status: "error",
                message: "Gagal menghapus produk"
            });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({
                status: "failed",
                message: "ID produk tidak ditemukan"
            });
        }

        res.json({
            status: "success",
            message: "Produk berhasil dihapus"
        });
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));