const { response } = require('express');
const TicketService=require('../services/email-service');

const create=async(req,res)=>{
    try{
        const response=await TicketService.createNotification(req.body);
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'successfully registed an email response remminder'
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            data:response,
            err:error,
            message:'unable to register and email reminder'
        })
    }
}

module.exports={
    create
}