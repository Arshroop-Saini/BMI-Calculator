const express = require('express')
const bodyParser= require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended: true}));
const port = 4000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', (req,res) => {
  var num1= Number(req.body.first)
  var num2= Number(req.body.second)
  var sum= num1+num2
  console.log("the sum of the two numers is: "+ sum)
})

app.get('/bmiCalculator', (req,res) => {
res.sendFile(__dirname + '/bmi.html')
})

app.post('/bmiCalculator',(req,res)=>{
  var weight= Number(req.body.n1);
  var height= Number(req.body.n2);
  var bmi= weight/Math.pow(height,2);
  
 console.log("Your BMI is: "+ bmi)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})