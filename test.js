const returnColor = require('./app');
//simple test !
describe('returnColor',()=>{
    test('should return #0bfc03', () => {
        expect(returnColor()).toBe('#0bfc03');
      });
})