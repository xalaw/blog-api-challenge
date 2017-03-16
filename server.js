const express = require('express');
const morgan = require('morgan');
//pass in the modularize router 'postRouter'
const postRouter = require('./postRouter');

const app = express();

app.use(morgan('common'));
app.get('/', (req, res) => {
	res.send('Welcome to Blog Posts!');
});
//specify the route where the router will use.
app.use('/blog-posts', postRouter);

//START LISTENING TO PORT 8080.
app.listen(process.env.PORT || 8080, () => {
	console.log(`Blog app is listening on port ${process.env.PORT || 8080}`);
} );