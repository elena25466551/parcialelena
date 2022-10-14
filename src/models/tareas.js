// const {model,Schema}= require(`mongoose`)//de libreria mongoose traigo model,schema
// const taskSchema = new Schema({
//     taskname:{
//         type:String,
//         required:true
//     },
//     taskdescription:{
//         type:String,
//             },
//     taskisdone:{
//         type:Boolean,
//         default:false
//     }}, {
//         versionKey: false,
//         timestamps: true
//     });
//     module.exports=model(`tasks`, taskSchema);


    const { model, Schema } = require('mongoose');


const TasksSchema = new Schema({ 
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    isEstado:{
        type:Boolean,
        default: false
    },
    isActive:{
        type: Boolean,
        default: true
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
}, {
 timestamps: true,
 versionKey: false
});


module.exports = model('Tasks', TasksSchema);
