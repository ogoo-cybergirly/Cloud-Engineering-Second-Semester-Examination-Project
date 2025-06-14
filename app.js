const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Ogochukwu — Lead Cloud Engineer</title>
  <style>
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background-color: #B6AFA9; 
      color: #3E3D3C;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    .container {
      background-color: #F5F5DC; 
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      max-width: 700px;
      width: 100%;
      text-align: left;
    }

    h1 {
      color: #8B5E3C; 
      font-size: 2rem;
      margin-bottom: 0.25rem;
    }

    h2 {
      color: #A97155;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.6;
      color: #4A4A4A;
    }

    h3 {
      margin-top: 2rem;
      font-size: 1.2rem;
      color: #5C5346;
    }

    ul {
      padding-left: 1.2rem;
      margin-top: 1rem;
    }

    li {
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.8;
      margin-bottom: 0.5rem;
      text-align: justify;
      color: #3E3D3C;
    }

    .button {
      display: inline-block;
      margin-top: 2rem;
      background-color: #A97155;
      color: #fff;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 1rem;
      transition: background-color 0.3s ease;
    }

    .button:hover {
      background-color: #8B5E3C;
     }
      .button {
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Ogochukwu — Lead Cloud Engineer</h1>
    <h2>The Future of AI-Powered Security</h2>
    <p>
      Our project leverages AI to detect and thwart cyber threats before they occur. It goes beyond the early detection and prevention of adversarial activities, 
      it incorporates security awareness, creation of a layered defense in-depth security posture, automation of tasks, and overall redefining of digital security for the next decade.
    </p>
    
    <h3>About Me</h3>
    <ul>
      <li>Cloud Engineering student at AltSchool Africa</li>
      <li>Cybersecurity (SOC) Analyst, BSc Microbiology</li>
      <li>Hands-on experience with AWS, threat modelling and intelligence, threat detection and incident response, vulnerability and risk management, and server deployment.</li>
      <li>Working towards a Master’s in Cybersecurity</li>
    </ul>

    <a href="mailto:cyberogochukwu@gmail.com" class="button">Email me let's talk</a>
    <a href="https://www.linkedin.com/in/ogochukwu-asogwa-868219247/" class="button" target="_blank">Social Media</a>
  </div>
</body>
</html>

  `);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
