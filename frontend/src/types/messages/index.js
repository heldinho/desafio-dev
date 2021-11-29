const MSG_TYPES = {
  SHOPS: {
    SUCCESS: {},
    ERROR: {
      FRONT: {},
      BACK: {},
    },
  },
  REMESSAS: {
    SUCCESS: {
      type: 'success',
      message: 'Remessa!',
      description: 'Remessa salva com sucesso.',
    },
    ERROR: {
      FRONT: {
        type: 'error',
        message: 'Remessa!',
        description: 'Erro ao salvar remessa, tente novamente mais tarde.',
      },
      BACK: {
        type: 'error',
        message: 'Remessa!',
        description: 'Erro ao salvar remessa, tente novamente mais tarde.',
      },
    },
  },
};

export default MSG_TYPES;
