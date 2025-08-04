const express = require('express');
const app = express(); 
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(to right, #74ebd5, #acb6e5);
          color: #333;
          text-align: center;
          padding: 50px;
        }
        h1 {
          font-size: 2.5rem;
        }
        p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 20px auto;
        }
        .box {
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          display: inline-block;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>Hi, welcome to this site!</h1>
        <p>My name is <strong>Mohd aasif</strong>, and this is my simple demo project to learn how CI/CD and deployment work with Node.js and Docker.</p>
        <p>Thanks for visiting! 😊</p>
      </div>
    </body>
    </html>
  `);
});

// Only start the server if this file is run directly (not during testing)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
