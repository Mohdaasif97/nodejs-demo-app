const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should respond with welcome HTML content', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hi, welcome to this site!');
    expect(response.text).toContain('Aasif Mohd');
    expect(response.text).toContain('<!DOCTYPE html>');
  });
});
