const express=require("express");
const app=express();
const path=require('path');
var hbs = require('hbs');
const port=process.env.PORT || 8000;
const staticPath=path.join(__dirname,"../public");
const views_path=path.join(__dirname,"../templates/views");
const path_partial=path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.set('views',views_path)
hbs.registerPartials(path_partial);
app.use(express.static(staticPath));

app.get('/',(req,res)=>{
    res.render("index");
});

app.get('/about',(req,res)=>{
    res.render("about");
});

app.get('/comingSoon',(req,res)=>{
    res.render("comingSoon");
});

app.get('/weather',(req,res)=>{
    res.render("weather");
});


app.get('*',(req,res)=>{
    res.render("404page");
});
app.listen(port,()=>{
    console.log(`Your App is Listen to Port ${port}`);
})
