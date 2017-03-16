const express = require('express');
const morgan = require('morgan');
//use router to modularize postRouter.
const router = express.Router();
//pass in the modularize router 'postRouter'
const postRouter = require('postRouter');

const app = express();

app.use(morgan('common'));
//specify the route where the router will use.
router.use('/blog-posts', postRouter);

//START LISTENING TO PORT 8080.
app.listen(process.env.PORT || 8080, () => {
	console.log(`Blog app is listening on port ${process.env.PORT || 8080}`);
} );