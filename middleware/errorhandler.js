

export const errHandler = (err, req, res, next)=> {
  
    return  res.status(404).json({
     success: false,
     message: "No such task exist",
   });
  }