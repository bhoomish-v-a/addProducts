const express=require('express');
const bodyParser=require('body-parser');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const path=require('path');
const app=express();


app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');


app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','err.html'));
    //res.render('err')
});
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(7000)



