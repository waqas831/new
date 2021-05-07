const express=require('express');
const app=express();
const port=process.env.port|8080

app.use(require('./router/route'));
app.use(express.static('/public'));
app.use('/css',express.static(__dirname+ '/public/css'));
app.use('/images',express.static(__dirname+'/public/images'))


app.set('views','./views');
app.set('view engine','ejs');


app.listen(port,(err)=>{
    if (err) throw err;
    console.log(`server is running on port ${port}`);
});
