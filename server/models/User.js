const moongoose = require('moongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        tpye: String,
        required: true
    }
})

const usermodel = mongoose.model('User',userSchema)

module.exports = usermodel