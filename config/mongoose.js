const mongoose=require('mongoose');//require the library

// connect to database
mongoose.connect('mongodb://localhost/contact_list_db');
//acquire the connection (to check if it is succesful)
const db=mongoose.connection;
// error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running
db.once('open',function()
{
    console.log('Succesfully connected to the data base');

});