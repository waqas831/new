const express=require('express');
const app=express();
const ejs=require('ejs');
const route=require('./router/route');
const port=process.env.port|8080

app.use(require('./router/route'));
app.set('view engine','ejs');


app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`server is running on port ${port}`);
});
