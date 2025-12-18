module.exports = (req, res, next) => {
  const jam = new Date().getHours();

  if (jam < 8 || jam >= 18) {
    console.log('[JAM AKSES DITOLAK]');
    return res.status(403).json({
      message: 'API hanya dapat diakses pada jam 08.00 - 18.00',
    });
  }

  console.log('[JAM AKSES OK]');
  next();
};
