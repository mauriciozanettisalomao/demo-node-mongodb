const express = require('express');
require('./db/mongoose');
const productRouter = require('./routes/product');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// routes
app.use(productRouter);

app.listen(port, ()=>{
    console.log('App listening on port '+port);
});
 

