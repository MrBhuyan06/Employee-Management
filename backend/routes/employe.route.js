import express from 'express'
import { createEmp, home } from '../controllers/employe.controller.js'
console.log(typeof home);

const router=express.Router()

router.get("/",home)
router.post("/createemp",createEmp)

export default router