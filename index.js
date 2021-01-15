const express=require('express');
const path=require('path');
const port=8000;//setting port
const db=require('./config/mongoose');//for database
const Contact=require('./models/contact')//for schema in database
const app=express();
const fs=require('fs');

app.set('view engine','ejs');//setting up view engine
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));//middleware
app.get('/',function(req,res)//get request for homepage
{
    console.log(__dirname);
   
    Contact.find({},function(err,contact){
        if(err)//in case of error
        {
            console.log('error in fetching detail');
            return;
        }
        return res.render('home',{
            title:"To Do List",
            contact_list:contact

        });
    });

});
app.get('/profile',function(req,res)
{
    return res.render('profile',{title:'profile'});



});
var contactList=[
    

]
app.post('/create-contact',function(req,res)
{
    // contactList.push(req.body);
    Contact.create({
        name:req.body.name,
        phone:req.body.phone,
        // phone:req.body.date,
        time:req.body.time,
        category:req.body.category,


    },function(err,newcontact){
        if(err)
        {
            console.log('error in creating contact');
            return;
        }
        console.log('*****',newcontact);

    });
    return res.redirect('back');
   
});
// deleteing list item
app.get('/delete-contact/:id',function(req,res)
{
    let id=req.params.id;//get id from query
    // 
    Contact.findByIdAndDelete(id,function(err)
    {
        if(err)
        {
            console.log('error in deleting');
            return;
        }
        return res.redirect('back');

    });



});
app.listen(port,function(err)
{
    if(err)
    {
        console.log('error in runing',err);
    }
    console.groupCollapsed('running on port',port);

});
//index.js
//npm init
//nom install express ejs
//