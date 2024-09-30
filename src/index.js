const express=require('express');
const bodyParser=require('body-parser');

const {PORT}=require('./config/serverConfig');

const {sendBasicEmail}=require('./services/email-service')

const setUpAndStartServer=()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`server is running on PORT ${PORT}`);
    
        sendBasicEmail(
            'support@admin.com',
            'formypromootp@gmail.com',
            'this is testing email',
            'hey how are u i hope u are well'
        )
    })


}

setUpAndStartServer();