const mongoose = require('mongoose');

const dbConnection = async () =>{
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log('La base de datos está conectada')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {dbConnection}