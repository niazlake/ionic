const { register, navigate } = require('../../../../../scripts/e2e');

describe('datetime/basic', () => {

  register('should init', navigate('http://localhost:3333/src/components/datetime/test/basic'));

});
