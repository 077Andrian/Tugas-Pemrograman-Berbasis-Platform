
const express = require('express');
const { requireAuth, requireRole } = require('../middleware/auth');

const router = express.Router();

router.get(
  '/rekap',
  requireAuth,
  requireRole('ADMIN'),
  (_req, res) => {
    res.status(200).json({
      status: true,
      message: 'Rekap khusus admin',
      data: {
        totalUser: 2,
        catatan: 'Contoh guard peran Pertemuan 3',
      },
    });
  }
);

module.exports = router;
