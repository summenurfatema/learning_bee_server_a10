const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const courses = require('./data/courses.json')
const coursesInfo = require('./data/course-details.json')


app.get('/', (req, res) => {
    res.send('Happy Assignment!')
})

app.use(cors())

app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/course-info', (req, res) => {
    res.send(coursesInfo)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(n => n.id === id);
    res.send(course)
}
)
app.get('/course-info/:id', (req, res) => {
    const id = req.params.id;
    const courseInfo = coursesInfo.find(n => n.id === id);
    res.send(courseInfo)
}
)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})