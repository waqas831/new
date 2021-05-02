const express=require('express');
var router=express.Router();



router.get('/',(req,res)=>{
    res.render('index')
});

router.get('login',(req,res)=>{
    res.send('welcome in login page')
})



module.exports=router;