const express = require('express')
const listRouter = express.Router()
const List = require('../models/listmodel')

listRouter.get('/all',(req,res,next)=>{
    List.find()
    .then(response=>{
        res.send(response)
    })
    .catch(error=>{
        res.send({message:"An Error Occured!"})
    })
})

listRouter.get('/lists/:listid',(req,res,next)=>{
    let _id = req.params.listid
    List.findOne({_id})
    .then(response=>{
        res.send(response)
    })
    .catch(error=>{
        res.send({message:"An Error Occured!"})
    })
})
listRouter.post('/lists', (req, res, next)=>{
    let title = req.body.title
    let newList = new  List({
        title:title
    })
    newList.save()
    .then((newListDoc)=>{
        res.send(newListDoc)
    })
    .catch((err)=>{
        res.send({message:err})
    })
})

listRouter.patch('/lists/:id', (req, res, next)=>{
    List.findByIdAndUpdate({_id:req.params.id}, {
        $set:req.body
    })
    .then(()=>{
        res.send({message:"List Updated Successfully!"})
    })
    .catch(error=>{
        res.send({message:"An Error Occured!"})
    })
})

listRouter.delete('/lists/:id', (req, res, next)=>{
    List.findByIdAndRemove({
        _id:req.params.id
    }).then(()=>{
        res.send({message:"List Deleted Successfully!"})
    })
    .catch(error=>{
        res.send({message:"An Error Occured!"})
    })
})

module.exports = listRouter