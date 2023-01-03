import express from 'express'

import connect from './config/db.js'

// connect()


const app=express()

app.get('/',(req, res) =>
{
    res.send("Hello World")
})

export default app