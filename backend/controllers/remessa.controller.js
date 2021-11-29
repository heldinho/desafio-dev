const db = require('../database/knexfile');
const utils = require('../utils');

module.exports = {
  getAllRemessas: async (req, res) => {
    try {
      const data = await db('remessas');
      res.json({
        error: false,
        success: true,
        message: 'Success',
        data,
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
  createRemessa: async (req, res) => {
    try {
      const body = req.body;
      if (body.length !== 0 && utils.checkType(body) === 'array') {
        await db('remessas').insert(body);
        res.json({
          error: false,
          success: true,
          message: 'shipment registered successfully',
        });
      } else {
        res.json({
          error: true,
          success: false,
          message: 'body invalid, type array',
        });
      }
    } catch (error) {
      res.json({
        error: true,
        success: false,
        message: 'Error, internal',
        debug: error,
      });
    }
  },
  getRemessaByTaxid: async (req, res) => {
    try {
      const taxId = utils.clear(req.params.taxId);
      const data = await db('remessas').select('*').where({ taxId });
      res.json({
        error: false,
        success: true,
        message: 'Success',
        data,
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
