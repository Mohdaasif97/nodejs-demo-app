const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should respond with welcome HTML content', async () => {
    const response = await request(app).get('/');
    
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/html/);
    expect(response.text).toContain('<!DOCTYPE html>');
    expect(response.text).toContain('Hi, welcome to this site!');
    expect(response.text).toContain('Mohd aasif');
    expect(response.text).toContain('CI/CD and deployment');
    expect(response.text).toContain('Thanks for visiting! 😊');
  });

  it('should have proper HTML structure', async () => {
    const response = await request(app).get('/');
    
    expect(response.text).toContain('<html lang="en">');
    expect(response.text).toContain('<title>Welcome</title>');
    expect(response.text).toContain('<div class="box">');
    expect(response.text).toContain('</html>');
  });

  it('should include CSS styling', async () => {
    const response = await request(app).get('/');
    
    expect(response.text).toContain('<style>');
    expect(response.text).toContain('background: linear-gradient');
    expect(response.text).toContain('font-family: Arial');
  });
});
