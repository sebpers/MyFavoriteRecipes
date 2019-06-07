// Mongoose and mocking requests
const mongoose = require('mongoose')
const sinon = require('sinon');
require('sinon-mongoose')

// initialize the app and models
const app = require('../index.js')

// sending requests
const agent = require('supertest').agent(app);
// validating results
const expect = require('chai').expect;

// get the model
const Recipe = mongoose.model('Recipe')


var userMock = sinon.mock(Recipe)
before(() => {
});

afterEach( () => {
	userMock.verify();
	userMock.restore(); // Unwraps the spy
});


describe('Recipe Integration tests', () => {

	// Our test data
  const test = {
        title: 'Curry',
        ingredients: [{
          name: 'Potatis',
          amount: 6,
          unit: 'st'
        },{
         name: 'kikärtor',
           amount: 4,
           unit: 'dl'
         }, {
           name: 'mango',
           amount: 3,
           unit: 'st'
         }
			 ],
			 description: 'This description is for this dish!'
    }

	describe('recipes.get', ()  => {

		it('Should return an array of all recipes', (done) => {

			// Given (preconditions)
			// userMock
			// .expects('findOne')
			// .chain('exec')
			// .resolves([test]);

			// When (someting happens)
			agent
			.get('/recipes')
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(200);
				expect(res.body).to.eql([test]);
				done();
				console.log(err)
			});
		});
	});
});