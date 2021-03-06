const { Schema, model } = require('mongoose');


const userSchema = Schema({ 

    fullName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}

})

module.exports = model('User', userSchema)