const moongoose = require('moongoose')
const jobSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: true
    },
    postion:{
        type: String,
        required: true
    },
    description:{
        tpye: String,
        required: false
    }
})

const jobmodel = mongoose.model('AddJob',userSchema)

module.exports = jobmodel