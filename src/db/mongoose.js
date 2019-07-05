const mongoose = require('mongoose');

const url = 'mongodb+srv://db-user:AbCiUOPyU9WE7GSP@cluster0-eaoot.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true});