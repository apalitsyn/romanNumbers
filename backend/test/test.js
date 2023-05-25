let server = require('../app');
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

describe('Convert to roman number', () => {
  it('should return 200', (done) => {
    chai.request(server)
      .get('/?ourNumber=18')
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });

  it('should return XVIII for 18', (done) => {
    chai.request(server)
      .get('/?ourNumber=18')
      .end((err, response) => {
        response.text.should.be.eql('XVIII');
        done();
      });
  })
});

