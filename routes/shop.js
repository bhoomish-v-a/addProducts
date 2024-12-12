const express=require('express');
const path=require('path');
const router=express.Router();
const bodyParser=require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use('/shop',(req,res,next)=>{
    const item=['Java','Python','React','Node','Express'];
    console.log('shop');
    //res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.render('shop',{item:item,name:'bhoomi'});
    
});
router.use('/about',(req,res,next)=>{
    res.render('about');
    //res.sendFile(path.join(__dirname,'../','views','about.html'));
    
});
module.exports=router;