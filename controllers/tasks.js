
import { Task } from "../models/task.js";

import { User } from "../models/user.js";


export  const newTask = async (req, res, next) =>
{
   const {title, description} = req.body ;

   await Task.create({
    title,
     description,
     user : req.user
   })

   res.status(201).json({
    success : true ,
    message : "Task added Successfully"
   })

}


export const myTasks = async (req, res, next) => {

  
   const allTasks =  await Task.find( {user : req.user});

   res.status(200).json({
    allTasks
   })

}

export const updateTask = async (req, res, next) => {

    try {
      const { id } = req.params ;

      const task = await Task.findById(id) ;

      if(!task) return next(new Error("wrong task id"))

      task.isCompleted = !task.isCompleted ;

      await task.save();
 
 
    res.status(200).json({
        success : true, 
        message : "Task updated"
    
    })
      
    } catch (error) {
       next(error)
    }
 
 }



 export const deleteTask = async (req, res, next) => {
try {
  
  const { id } = req.params ;

  const task = await Task.findById(id) ;
       
  console.log(task)
  if(!task) return next(new Error("wrong task id"))
                                
  await task.deleteOne();

  res.status(200).json({
      success : true,
       message : "Task deleted"
  })
  
} catch (error) {
   next(error)
}
 
 }