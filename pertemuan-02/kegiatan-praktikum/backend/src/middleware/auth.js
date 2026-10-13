
const jwt = require('jsonwebtoken');

function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      status: false,
      message: 'Token tidak ditemukan',
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    req.user = jwt.verify(
      token,
      process.env.JWT_SECRET ||
      'dev-secret-pertemuan-3-jangan-pakai-produksi'
    );

    next();
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: 'Token tidak valid atau kedaluwarsa',
    });
  }
}

function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        status: false,
        message: 'Kamu tidak memiliki izin untuk mengakses fitur ini',
      });
    }

    next();
  };
}

module.exports = { requireAuth, requireRole };
