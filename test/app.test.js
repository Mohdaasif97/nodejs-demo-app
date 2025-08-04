const request = require('supertest');
const app = require('../app');
let server;

beforeAll(() => {
  // If your app doesn't export the server, you might need to modify your app.js
  server = app.listen(0); // 0 means random available port
});

afterAll(async () => {
  // Properly close the server after all tests
  await server.close();
});
describe('GET /', () => {
  it('should respond with welcome HTML content', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hi, welcome to this site!');
    expect(response.text).toContain('Mohd aasif');
    expect(response.text).toContain('<!DOCTYPE html>');
  });
});
