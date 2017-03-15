const express = require('express');

const app = express();




app.listen(process.env.PORT || 8080, () => {
    console.log(`Blog app is listening on port ${process.env.PORT || 8080}`);
} );