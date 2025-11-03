import createError from "../utils/createError.js";
export const register = (req, res, next) => {
  try {
    
    //code body
    // TODO
    //  1.check body 
    // 2. check email in database 
    // 3. Encrypt password  -> bcryptjs 
    // 4. Insert into BD
    // 5. Respone

    const { email, name, password } = req.body;
    console.log(email, name, password);

    res.json({ message: "This is controllers" });
  } catch (error) {
    next(error);
  }
};

export const login = (req, res) => {
  safd;
  res.json({ message: "this is login" });
};
