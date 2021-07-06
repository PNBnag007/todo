const mongoose = require('mongoose');

// const url = 'mongodb://127.0.0.1:27017/todo';
// const options = { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false };
// mongoose.connect(url,options);

const PASSWORD = encodeURIComponent('PNBnag@007'); 

mongoose
  .connect(
    `mongodb+srv://PNBnag007:${PASSWORD}@cluster0.jfatg.mongodb.net/todo?retryWrites=true&w=majority`,
    { useNewUrlParser: true},
    { useCreateIndex: true },
    { useFindAndModify: false},
    { useUnifiedTopology: true },
  )
  .catch(err => {
    console.log(err);
  });
  
// var db = mongoose.connection;

// db.once('open', _=>{
//     console.log('Database connected:',url);
// });

// db.on('error',err=>{
//     console.error('connection error:',err);
// });

// Defining a schema

const todoSchema = new mongoose.Schema({
    title : {type:String, required: true},
    done : {type:Boolean},
    date : {type:Date,default:Date.now}
})

// Creating model
module.exports = mongoose.model("Todo",todoSchema);

