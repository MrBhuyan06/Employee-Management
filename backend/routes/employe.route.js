import express from 'express'
import { home } from '../controllers/employe.controller.js'
console.log(typeof home);

const router=express.Router()

router.get("/",home)

export default router