const bodyParser=require('body-parser');
const urlencodedParser=bodyParser.urlencoded({extended:false});

module.exports = (app)=>{
    app.post('/signup',urlencodedParser,function(req,res){
        ///
    });
    app.get('/signup',function(req,res){
        res.render('signup.ejs');

    });
    
}