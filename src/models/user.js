//lo que va a la BD
const {model,Schema}= require(`mongoose`)

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    active:{
        type:Boolean,
        default:true
    },
    role:[{
        type:String
    }]}, {
        versionKey: false,
        timestamps: true
    });
    module.exports = model('User', userSchema);