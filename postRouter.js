const express = require('express');
//use router to modularize postRouter.
const router = express.Router();
const { BlogPosts } = require('./model');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

//set router for home directory and GET
router.get('/', (req, res) => {
	res.json(BlogPosts.get());
});

//set router for home directory and POST
router.post('/', jsonParser, (req, res) => {
	const requiredFields = ['title','content','author'];
	//check requiredFields and throw error if the field is empty
	for (let i=0; i<requiredFields.length; i++) {
		const field = requiredFields[i];
		if (!(field in req.body)){
			const message = `Missing ${field} in request body.`;
			console.error(message);
			return res.status(400).send(message);
		}
	}
	//create post with the req and set status to 201.
	const item = BlogPosts.create(
		{	
			title: req.body.title, 
			content: req.body.content, 
			author: req.body.author,
			publishDate: Date.now()
		}
	);
	return res.status(201).send(item);
});

//set router for home directory with ID and PUT


//set router for home directory with ID and DELETE
router.delete('/:id', (req, res) => {
	BlogPosts.delete(req.params.id);
	console.log(`Deleted blog post with id \`${req.params.ID}\``);
	res.status(204).end();
});


//set up some post to look Date
var content = 'blah blah blah blah blah blah blah blah blah blah blah hoooyah.';

BlogPosts.create(
    'The First Blogpost', content, 'Franklin & Ally', Date.now());
BlogPosts.create(
    'The Second Blogpost', content, 'Franklin & Ally', Date.now());