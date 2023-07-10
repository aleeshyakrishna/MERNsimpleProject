import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  console.log(userId,"adminInfo")
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15m'
    
  });
};

export default generateToken;
