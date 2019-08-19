const express = require('express')
const proxy = require('http-proxy-middleware');
const app = express();
const port = 3003;

const stockUrl = process.env.apiUrl || 'https://api.iextrading.com/1.0'

app.get('/health', (req, res) => res.send('Server is UP !'));
app.use(express.static('public'));


// Add middleware for http proxying 
app.use('/api', proxy({ 
target: stockUrl,
 changeOrigin: true,
pathRewrite: {
    '^/api':'' //remove /api
  }
  }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))