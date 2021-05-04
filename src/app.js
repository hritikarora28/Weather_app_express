const express = require('express');

const path = require('path');
const hbs = require('hbs')
const app = express();
const port = process.env.port || 8000;
//Public static path
const staticPath = path.join(__dirname,'../public');
const templatePath = path.join(__dirname,'../templates/views');
const partialspath = path.join(__dirname,'../templates/partials')



app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views',templatePath);
hbs.registerPartials(partialspath);

//routing





app.get("",(req,res) => {
	res.render('index')
})

app.get('/about', (req, res) => {
	res.render('about')
});

app.get('/weather', (req, res) => {
	res.render('weather');
});

app.get('*', (req, res) => {
	res.render('404error',{
		errormsg:"Opps Page not Found"
	})
});

app.listen(port, () => {
	console.log(`Buddy aapke request listen ho rhe hai buddy ${port} is port parr`);
});

//40:06 to start
