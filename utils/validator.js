// validate with yup
import { object, string } from "yup";


//req.body.email 
// if(email) อะไร กว่าจะเช็คได้ ันนี้คือเอา library มาช่วย 
//หน้าบ้านหัลงบ้านต้อง validation เหมือนกัน 
//validate อะไรบ้าง
export const registerSchema = object({
    email:string().email("email ไม่ถูกต้อง").required("กรุณากรอก email "),
    name:string().min(3,"name ต้องมากกว่า 3 ตัวนะ"),
    password:string().min(6,"password มากกว่า 6 ตัวนะ"),
})
export const loginSchema = object({
    email:string().email("email ไม่ถูกต้อง").required("กรุณากรอก email "),
    password:string().min(6,"password มากกว่า 6 ตัวนะ"),
})

// funtion for validate 
export const validate = (schema) =>  async(req,res,next) => {
    try {
        await schema.validate(req.body,{abortEarly:false})
        next()
    } catch (error) {

        const errTxt = error.errors.join(",")
        // console.log(errTxt)
        const err = new Error(errTxt)
        next(err)

    }
}