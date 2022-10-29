const mongoose = require('mongoose');

require('dotenv').config();

//Connect to DB
const ConnectDB = async () => {

    //MongoDB URI saved in .env 
    const db = process.env.MONGO_DB_URI;

    try{
        await mongoose.connect('mongodb://localhost:27017/userManageDB', 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Connected to MongoDB successfuly!')
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = ConnectDB;