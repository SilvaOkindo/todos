import express from 'express'

const app = express()

app.use("hello", (req, res) => {
    res.json({message: "hello from render"})
})

app.listen(5000, () => {
    console.log("app running on port 5000")
})