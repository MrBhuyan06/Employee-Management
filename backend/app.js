import express from 'express'

import connect from './config/db.js'
import router from './routes/employe.route.js'

// connect()

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/v1',router)

export default app