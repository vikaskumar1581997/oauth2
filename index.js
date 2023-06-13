const express=require('express')
const path=require('path')
const passport=require('passport')
const session = require('express-session')
const app=express()
const hbs = require("hbs")
const cors = require('cors');
require('./auth')

app.use(express.json())
app.use(express.static(path.join(__dirname,'client')))

app.set("view engine" , "hbs") 

app.use(cors())


function isLoggedIn(req,res,next){
    req.user?next():res.sendStatus(401)
}

app.get('/',(req,res)=>{
    res.sendFile(index.html)
})

app.use(session({
    secret: 'vikaskumar',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))
  
  app.use(passport.initialize())
  app.use(passport.session())

  app.get('/auth/google',
  passport.authenticate('google', { scope: ['email','profile'] }));

  app.get('/auth/google/callback', 
  passport.authenticate('google', { 
    
    failureRedirect: '/auth/failure',
   
  }),
  function(req, res) {
   
    res.redirect('/auth/protected');
  });

  app.get('/auth/protected',isLoggedIn,(req,res)=>{
    console.log("success")
    let name=req.user.displayName
    data={
        name
    }
    res.render("home",data)
    
  })

  app.get('/auth/failure',(req,res)=>{
    res.send("Something went wrong")
  })

  app.listen(5000,()=>{
    console.log("connected")
  })