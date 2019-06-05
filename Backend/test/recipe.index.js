// initialize the app and models
const app = require('../../index.js')

// sending requests
const agent = require('supertest').agent(app);
// validating results
const expect = require('chai').expect;

// get the model
const Recipe = mongoose.model('Recipe')


var userMock = sinon.mock(Recipe)
before(() => {});

afterEach(() => {
    userMock.verify();
    userMock.restore(); // Unwraps the spy
});


describe('recepie Integration tests', () => {

    // Our test data
    const test = [
        {
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
           ]
        },
     ];

    describe('recipes.get', () => {

        it('Should return an array of all recipes', (done) => {

            // Given (preconditions)
            userMock
                .expects('find')
                .chain('exec')
                .resolves([test]);

            // When (someting happens)
            agent
                .get('/recipes')
                .end((err, res) => {
                    // Then (something should happen)
                    expect(res.status).to.equal(200);
                    expect(res.body).to.eql([test]);
                    done();
                });
        });

        // it('Should get a user by name', (done) => {

        //     // Given (preconditions)
        //     userMock
        //         .expects('findOne')
        //         .withArgs({
        //             "username": "coolz"
        //         })
        //         .chain('exec')
        //         .resolves(expected);

        //     // When (someting happens)
        //     agent
        //         .get('/users?username=coolz')
        //         .end((err, res) => {
        //             // Then (something should happen)
        //             expect(res.status).to.equal(200);
        //             expect(res.body).to.eql(expected);
        //             done();
        //         });
        // });
    });

    // describe('users.post', () => {
    //     it('Should be able to create a user', (done) => {
    //         // Given (preconditions)
    //         userMock
    //             .expects('create')
    //             .chain('exec')
    //             .resolves(expected);

    //         // When (someting happens)
    //         agent
    //             .post('/users/')
    //             .send(expected)
    //             .end((err, res) => {
    //                 // Then (something should happen)
    //                 expect(res.status).to.equal(201);
    //                 expect(res.body).to.eql(expected);
    //                 done();
    //             });
    //     });
    // })
});