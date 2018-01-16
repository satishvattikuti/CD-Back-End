const expect = require('chai').expect;
const request = require('request');


describe('MAIN PAGE', function() {
    it('Main page content', function(done) {
         request('http://localhost:3000' , function(error, response, body) {
         expect(body).to.equal('Welcome to Your Server');
         done();
         })
    ;});

    it('Main page status message', function(done) {
        request('http://localhost:3000' , function(error, response, body) {
        expect(response.statusMessage).to.equal("OK");
        done();
        });
    });

    it('Main page status', function(done) {
        request('http://localhost:3000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
        });
   });
});

describe('ABOUT PAGE', function() {
    it('About page content does not exist', function(done) {
        request('http://localhost:3000/about' , function(error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });    
});

describe('VERSION PAGE', function() {
    it('Version page content', function(done) {
        request('http://localhost:3000/version' , function(error, response, body) {
            //console.log(response);
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe('HeLLO WORLD PAGE', function() {
    it('Displays Hello World', function(done) {
        request('http://localhost:3000/hello', function(error, response, body) {
            expect(body).to.equal('Hello World');
            done();
        });
    });
    it('Success Status', function(done) {
        request('http://localhost:3000/hello' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    })
});