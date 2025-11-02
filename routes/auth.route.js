import express from 'express'

const router = express.Router()


//endpoint http://localhost:8000/auth/register
router.post('/register',(req,res) => {
    //code body
    res.json({message:"Helllo Register"});
})



export default router