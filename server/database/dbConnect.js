const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://<username>:<password>@jobtracker.bn1twno.mongodb.net/?retryWrites=true&w=majority')


const connection = mongoose.connection 

connection.on('error',er=> console.log(er))

connection.on('connected', () => console.log("MongoDB connection established"))