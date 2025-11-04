import prisma from "../config/prisma.js";
import createError from "../utils/createError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    //code body
    // TODO
    //  1.check body
    // 2. check email in database
    // 3. Encrypt password  -> bcryptjs
    // 4. Insert into BD
    // 5. Respone

    // 1. check body
    const { email, name, password } = req.body;

    // 2.check in DB
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (user) {
      createError(400, "email already exist");
    }
    //3.Encrypt password
    const hashPassword = bcrypt.hashSync(password, 10);

    //4.Insert into DB
    const result = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashPassword,
      },
    });

    //  console.log(result);

    res.json({ message: " Register successfully" });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    //1.check validate
    //2.check email
    //3.check password
    //4.generate token
    //5. Reaspone

   //validation 
    const { email, password } = req.body;

    //check email 
     
      const user = await prisma.user.findFirst({
        where:{
          email:email,
        }
      })
      if(!user){
        createError(400,"Email or Password is Invalid!!")
      }

      const checkPassword = bcrypt.compareSync(password,user.password)


      if(!checkPassword){
        createError(400,"email or password is Invalid")
      }
      //4. Generate Token
      const payload = {
        id:user.id,
        name:user.name,
        role:user.role,

      }

      const token = jwt.sign(payload,process.env.SECRET,{expiresIn:'1d'})

 console.log(token);


    res.json({ 
      message: "login successfully",
      payload:payload,
      token:token,

     });
  } catch (error) {
    next(error);
  }
};
