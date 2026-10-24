const express = require('express')

const router = express.Router()

router.get('/', function(req, res) {

    res.render('homepage')
})


router.get('/calculateBMI', function(req, res){
    
const formData = req.query
const userHeight = formData.height
const userWeight = formData.weight

console.log(userHeight)
console.log(userWeight)

const calculateBmi = userWeight / (userHeight * userHeight )
res.render('results', {'bmi': calculateBmi.toFixed(2)})
})

module.exports = router