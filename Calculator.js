const express = require('express')
const bodyParser= require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended: true}));
const port = 4000

app.get('/', (req,res) => {
res.sendFile(__dirname + '/index.html')
})

app.post('/',(req,res)=>{
  var weight= Number(req.body.first);
  var height= Number(req.body.second);
  var bmi= weight/(Math.pow(height,2));
  
 res.send("<h1>Your BMI is: </h1>"+ bmi)
 
 res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
