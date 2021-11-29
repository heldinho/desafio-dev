const utils = require('../utils');

module.exports = {
  validTaxId: (req, res, next) => {
    const taxId = utils.clear(req.params.taxId);
    if (String(taxId).length < 11) {
      res.json({
        error: true,
        success: false,
        message: 'Error, taxId inválido',
        debug: null,
      });
      return;
    }

    next();
  },
};
