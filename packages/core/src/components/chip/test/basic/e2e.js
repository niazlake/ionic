const { register, navigate } = require('../../../../../scripts/e2e');

describe('chip/basic', () => {

  register('should init', navigate('http://localhost:3333/src/components/chip/test/basic'));

});
