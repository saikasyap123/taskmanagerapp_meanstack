const express = require('express')
const taskRouter = express.Router()
const Task = require('../models/taskmodel')


taskRouter.get('/lists/:listid', (req, res, next)=>{
    let _listid = req.params.listid
    Task.find({
        _listid
    })
    .then((tasks)=>{
        res.send(tasks)
    })
    .catch((err)=>{
        res.send({message:"An Error Occured!"})
    })
})

taskRouter.patch('/lists/:listid/:taskid', (req, res, next)=>{
    let listid = req.params.listid
    let id = req.params.taskid
    Task.findByIdAndUpdate({
        _id:id,
        _listid:listid
    },
    {$set:req.body})
    .then(()=>{
        res.send({message:"Task Updated Successfully!"})
    })
    .catch((err)=>{
        res.send({message:"An Error Occured!"})
    })
})

taskRouter.delete('/lists/:listid/:taskid', (req, res, next)=>{
    let id = req.params.taskid
    let listid = req.params.listid
    Task.findOneAndRemove({
        _id :id,
        _listid:listid
    })
    .then(()=>{
        res.send({message:"Task Deleted Successfully!"})
    })
    .catch((err)=>{
        res.send({message:"An Error Occured!"})
    })
})

taskRouter.post('/lists/:listid', (req, res, send)=>{
    let listid = req.params.listid
    let title = req.body.title
    let newTask = Task({
        title,
        _listid:listid,
        completed:false
    })
    newTask.save()
    .then(()=>{
        res.send({messag:"New Task Added Successfully!"})
    })
    .catch((err)=>{
        res.send({message:"An Error Occured!"})
    })
})
taskRouter.post('/lists/complete/:listid/:taskid', (req, res, send)=>{
    let listid = req.params.listid
    let taskid = req.params.taskid
    Task.findByIdAndUpdate({
        _listid:listid,
        _id:taskid
    },
    {$set:req.body})
    .then(()=>{
        res.send({message:"Marked as done!"})
    })
    .catch(()=>{
        res.send({message:"An Error Occured!"})
    })

})

module.exports = taskRouter