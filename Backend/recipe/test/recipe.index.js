// Mongoose and mocking requests
const mongoose = require('mongoose');
//enable debug mode
mongoose.set('debug', true);

const sinon = require('sinon');

require('sinon-mongoose');

// initialize the app and models
const app = require('../index.js');

// sending requests
const agent = require('supertest').agent(app);
// validating results
const expect = require('chai').expect;

// get the model
const Recipe = mongoose.model('Recipe');


var userMock = sinon.mock(Recipe);

beforeEach(() => {
	console.log('beforeEach');
	userMock.restore(); // Unwraps the spy
});

afterEach( () => {
	console.log("after each");
	userMock.verify();
	// userMock.restore(); // Unwraps the spy
});




//first test 
describe('Recipe Integration tests', () => {

	// Our test data
  const request = {
  	title: "Rickards kebabrätt",
  	ingredients: [{
  			name: "chilli",
  			amount: 3,
  			unit: "dl"
  		},
  		{
  			name: "bananer",
  			amount: 3,
  			unit: "st"
  		}
  	],
  	description: "This is the description, thank you for using favorite recipes as your recipe collector"
  };

  //our expected test data
  const expected = {
  	_id: "5cff8739d2c8301ee3126b86",
  	title: "Rickards kebabrätt",
  	ingredients: [{
  			_id: "5cff8739d2c8301ee3126b88",
  			name: "chilli",
  			amount: 3,
  			unit: "dl"
  		},
  		{
  			_id: "5cff8739d2c8301ee3126b87",
  			name: "bananer",
  			amount: 3,
  			unit: "st"
  		}
  	],
  	description: "This is the description, thank you for using favorite recipes as your recipe collector",
  	__v: 0
  };

  //Get
	describe('recipes.get', ()  => {

		it('Should return an array of all recipes', (done) => {

			// Given (preconditions)
			userMock
			.expects('find')
			.chain('exec')
			.resolves([expected]);

			// When (something happens)
			agent
			.get('/favoriterecipes')
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(200);
				expect(res.body).to.eql([expected]);
				done();
				console.log(err);
			});
		});
	});

	// second test --- POST a recipe 
	describe('recipe.post', () => {
		it('Should be able to create a recipe', (done) => {
			// Given (preconditions)
			userMock
				.expects('create')
				.withArgs(request)
				.chain('exec')
				.resolves(expected);

			// When (someting happens)
			agent
				.post('/favoriterecipes')
				.send(request)
				.end((err, res) => {
					// Then (something should happen)
					expect(res.status).to.equal(201);
					expect(res.body).to.eql(expected);
					done();
				});
		});
	});

// third test
	describe('recipe.put', () => {
				it('Should be able to create/edit a recipe', (done) => {
					// Given (preconditions)
					userMock
						.expects('updateOne')
						.withArgs({
							_id: "5cff8739d2c8301ee3126b86"
						}, request)
						.chain('exec')
						.resolves({
							n: 1,
							nModified: 0,
							upserted: [{
								index: 0,
								_id: "5cff8739d2c8301ee3126b86"
							}],
							ok: 1
						});

					// When (someting happens)
					agent
						.put('/favoriterecipes/5cff8739d2c8301ee3126b86')
						.send(request)
						.end((err, res) => {
							// Then (something should happen)
							expect(res.status).to.equal(201);
							done();
						});
				});
			});

xit('Should get a recipe by title', (done) => {

	// Given (preconditions)
	userMock
		.expects('find')
		.withArgs({
			'title': 'Rickards kebabrätt'
		})
		.chain('exec')
		.resolves(expected);

	// When (someting happens)
	agent
		.get('/favoriterecipes/?title=Rickards%20kebabrätt')
		.end((err, res) => {
			// Then (something should happen)
			expect(res.status).to.equal(200);
			expect(res.body).to.eql(expected);
			done();
		});
});
});


