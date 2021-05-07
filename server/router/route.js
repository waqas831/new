const express=require('express');
var router=express.Router();



router.get('/',(req,res)=>{
    res.render('index');
  
});

router.get('/signup',(req,res)=>{
    res.render('contact')
});

router.get('/login',(req,res)=>{
    res.render('login')
});
router.get('/payment',(req,res)=>{
    res.render('payment');
})




module.exports=router;