const SERVICE_SID = "VA6efaf0d26d9b4141c7e0c9793cb6c25e";
const ACCOUNT_SID = "AC59893640d88cf3ce1aa55f231eace78c";
const AUTH_TOKEN = "12c93834271ac74f98c6f8088f1cb652";

const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);
//get code
exports.getCode = async (req, res) => {
    client
        .verify
        .services(SERVICE_SID)
        .verifications
        .create({
            to: `+${req.query.phonenumber}`,
            channel: "sms"
        })
        .then(data => {
            res.send({message : "code has been sent"})
        })
};
//verify code
exports.verifyCode = async (req, res) => {
    
    client
        .verify
        .services(SERVICE_SID)
        .verificationChecks
        .create({
            to: `+${req.query.phonenumber}`,
            code: req.query.code
        })
        .then(data =>{
        
           
           res.send(data);}
    
          

           
        );
};