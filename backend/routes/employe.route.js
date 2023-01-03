import express from 'express'
import { createEmp, getEmp, home, updateEmp } from '../controllers/employe.controller.js'
console.log(typeof home);

const router=express.Router()

router.get("/",home)
router.post("/createemp",createEmp)
router.get("/getemp",getEmp)
router.put("/updateemp/:id",updateEmp)

export default router