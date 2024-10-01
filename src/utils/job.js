const cron = require("node-cron"); 
const emailService=require('../services/email-service');
const sender=require('../config/email-config')
/**
 * 10:00 am
 * Every 5 minutes
 * we will check are their any pendign emails which was expected to be sent
 * by nwo and is pending
 * 
 * **/

const setUpJobs=()=>{
    cron.schedule('*/2 * * * *',async()=>{
        //console.log(sender);
        console.log('running a task ever two minutes');
        const response=await emailService.fetchPendingEmails();
        response.forEach((email)=>{
                sender.sendMail(
                {
                to:email.recepientEmail,
                subject:email.subject,
                text:email.content
            },async (err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log("data from else block of promise");
                    console.log(data);
                    await emailService.updateTicket(email.id,{status:"SUCcESS"});
                }
            }
            )
        })
        console.log(response);
    })
}

module.exports=setUpJobs;