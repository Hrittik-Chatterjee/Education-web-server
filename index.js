const express = require('express')
const app = express()
const cors =require('cors')
const port =process.env.PORT || 5000


app.use(cors())


const categories =require('./data/categories.json')
const courses= require('./data/courses.json');
const course1 =require('./data/course1.json')

app.get('/', (req, res)=>{
    res.send('courses api running')
})


app.get('/courses-categories', (req,res)=>{
    res.send(categories)
})
app.get('/all-courses', (req,res)=>{
    res.send(courses)
})
app.get('/courses/01', (req,res)=>{
    res.send(course1)
})

app.listen(port,()=>{
    console.log('coureses server running on port',port)
})

module.exports =app