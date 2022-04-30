require('dotenv').config({path: "./config.env"})
const express = require('express');
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')

//load and initialize messagebird SDK (new)
var messagebird = require('messagebird')('Ho6tvwvQO5Kmp3OIOMg3ikmYl')
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended:true}))

//Display page to ask the user for their phone number (new)
app.get('/',function(req,res){
    res.render('step1');
})

connectDB();



const app = express();

app.use(express.json())



// ... other imports 
const path = require("path")

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))



app.use('/api/auth', require('./routes/auth'))
app.use('/api/private', require('./routes/private'))

// Error handler(Should be the last piece of middleware)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});





//This code causes the PROXY CRASH !!!!!
process.on("unhandledRejection", (err,promise)=>{
    console.log(`Logged Error: ${err}`)
    // server.close(()=> process.exit(1))
})



//Handle phone number submission(new)

app.post('/step2',function(req,res){
    var number = req.body.number;

    //make request to verify API
    messagebird.verify.create(number,{
        template:"Your verifcation code is %token"},function(err,response){
            if(err){
                //request has failed
                console.log(err);
                res.render('step1',{
                    error:err.errors[0].description
                })

            }else{
                //request was successful
                console.log(response);
                res.render('step2',{
                    id:response.id
                })
            }
            });
        });

        //verify whether the token is correct
        app.post('/step3', function(req,res){
            var id = req.bosy.id;
            var token = req.body.yoken;

            //make request to verify API
            messagebird.verify.verify(id,token,function(err,response){
                if(err){
                    //verification has failed
                    res.render('step2',{
                        error:err.errors[0].description,
                        id:id
                    })
                }else{
                    //verification was successful
                    res.render('step3')
                }
            })
        })






    
    