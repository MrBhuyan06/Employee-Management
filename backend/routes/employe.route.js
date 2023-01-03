import express from 'express'
import { createEmp, getEmp, home } from '../controllers/employe.controller.js'
console.log(typeof home);

const router=express.Router()

router.get("/",home)
router.post("/createemp",createEmp)
router.get("/getemp",getEmp)

export default router