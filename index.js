const express = require('express')
const app = express()
const cors =require('cors')
const port =process.env.PORT || 5000


app.use(cors())


const categories =require('./data/categories.json')
const courses= require('./data/courses.json');
const course1 =require('./data/course1.json')
const course2 =require('./data/course2.json')
const course3 =require('./data/course3.json')
const course4 =require('./data/course4.json')
const course5 =require('./data/course5.json')
const course6 =require('./data/course6.json')

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
app.get('/courses/02', (req,res)=>{
    res.send(course2)
})
app.get('/courses/03', (req,res)=>{
    res.send(course3)
})
app.get('/courses/04', (req,res)=>{
    res.send(course4)
})
app.get('/courses/05', (req,res)=>{
    res.send(course5)
})
app.get('/courses/06', (req,res)=>{
    res.send(course6)
})

app.listen(port,()=>{
    console.log('coureses server running on port',port)
})

module.exports =app