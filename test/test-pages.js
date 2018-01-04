const expect  = require('chai').expect;
const request = require('request');

it('Main page content', function(done) {
    request('http://localhost:3000/hello' , function(error, response, body) {
        expect(body).to.equal('Your server Says Aishwarya');
        done();
    });
});

