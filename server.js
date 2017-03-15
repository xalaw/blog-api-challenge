const express = require('express');

const app = express();



//START LISTENING TO PORT 8080.
app.listen(process.env.PORT || 8080, () => {
    console.log(`Blog app is listening on port ${process.env.PORT || 8080}`);
} );