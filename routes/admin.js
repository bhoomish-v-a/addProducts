const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');
const path=require('path');

router.use(bodyParser.urlencoded({ extended: true }));
router.use('/add',(req,res,next)=>{
    console.log('add');
    //res.sendFile(path.join(__dirname,'../','views','add.html'));
    res.render('add');
});


router.post('/store',(req,res,next)=>{
    console.log('store');
    res.send('<h1>Stored product</h1>');
    console.log('Form-data',req.body)
});
module.exports=router;