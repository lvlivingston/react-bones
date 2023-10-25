const request = require('supertest');
// we have to make this an object, because we need the app & the server
const { app, server } = require('../app');

describe('Test the root PATH', () => {
    test('It should respond with "Hello World!"', async () => {
        const response = await request(app).get('/');
        //we expect the response text to be "Hello World"
        expect(response.text).toBe('Hello World!');
        //we expect the status code to be 200
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the users endpoints', () => {
    test('It should create a new user', async () => {
        const response = await request(app)
        .post('/users')
        .send({ name: 'John Doe', email: 'john.doe@example.com' });
        expect(response.body).toEqual({ name: 'John Doe', email: 'john.doe@example.com'});
   });
   test('It should update a user', async () => {
        const response = await request(app)
        .put('/users/123')
        .send({ name: 'Jane Doe', email: 'jane.doe@example.com' });
        expect(response.body).toEqual({ id: '123', name: 'Jane Doe', email: 'jane.doe@example.com' });
        expect(response.statusCode).toBe(200);
    });
    test('It should delete a user', async () => {
        const response = await request(app).delete('/users/123');
        expect(response.body).toEqual({ id: '123' });
        expect(response.statusCode).toBe(200);
    });
});
    
// after all tests are finished
afterAll(done => {
    // close the server to avoid any hanging requests
    server.close()
    done()
})