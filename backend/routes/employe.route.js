import express from 'express'
import { createEmp, deleteEmp, getEmp, home, updateEmp } from '../controllers/employe.controller.js'
console.log(typeof home);

const router=express.Router()

router.get("/",home)
router.post("/createemp",createEmp)
router.get("/getemp",getEmp)
router.put("/updateemp/:id",updateEmp)
router.delete("/deleteEmp/:id",deleteEmp)

export default router