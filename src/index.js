import express from 'express'

const app = express()

app.get("/", (req, res) => {
    res.send({message: "hello from render"})
})

app.listen(5000, () => {
    console.log("app running on port 5000")
})