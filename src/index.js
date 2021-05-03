const express = require('express');

const path = require('path');
const app = express();
const port = process.env.port || 8000;
//Public static path
const staticPath = path.join(__dirname,'../public');
console.log(staticPath)


app.use(express.static(staticPath));

//routing
app.get('/', (req, res) => {
	res.send('Welcome to home page');
});

app.get('/about', (req, res) => {
	res.send('Welcome to about page');
});

app.get('/weather', (req, res) => {
	res.send('Welcome to About weather page');
});

app.get('*', (req, res) => {
	res.send('Error 404 page not found');
});

app.listen(port, () => {
	console.log(`Buddy aapke request listen ho rhe hai buddy ${port} is port parr`);
});

//40:06 to start
