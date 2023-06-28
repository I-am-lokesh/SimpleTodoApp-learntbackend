import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendCookie } from "../utils/features.js";

export const getAllUsers = async (req, res) => {};






export const findbyParam = async (req, res) => {};





export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  
  if (!user)
    return res.status(404).json({
      success: false,
      message: "Invalid email or Password",
    });
  
    const isMatch = await bcrypt.compare(password, user.password) ;

    if (!isMatch)
    return res.status(404).json({
      success: false,
      message: "Invalid email or Password",
    });
  
   sendCookie(user, res, `welcome back ${user.name}`, 200)

};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user)
    return res.status(404).json({
      success: false,
      message: "User Already exist",
    });

  const hashedPassword = await bcrypt.hash(password, 10);
  user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  sendCookie(user, res, "Registered success", 201);
};




export const getMyProfile = ( req, res) => {

 

  res.status(200).json({
  success : true,
  user : req.user
}) ;


}


export const logout = (req,res)=> {
  res.status(200)
  .cookie('token', null, 
  {
    expires : new Date (Date.now()),
    sameSite : process.env.NODE_ENV==="Development"?"lax" : "none",
    secure : process.env.NODE_ENV==="Development"?false : true

  })
  .json({
    success: true,
    message: "Deleted Cookies",
  });

}