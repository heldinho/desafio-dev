const db = require('../database/knexfile');

module.exports = {
  getAllShops: async (req, res) => {
    try {
      const data = await db('shops');
      res.json({
        error: false,
        success: true,
        message: 'Success',
        data
      });
    } catch (error) {
      res.json({
        error: true,
        success: false,
        message: 'Error, internal',
        debug: error,
      });
    }
  },
};
