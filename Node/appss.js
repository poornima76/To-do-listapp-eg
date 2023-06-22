const nodemailer = require('nodemailer');
// package called nodemailer
// package require
// nodemailer initializer; transporter
// transporter.sendMail()
const mailOptions = {
    from: '"Poornima" <poornima.mrsn@gmail.com>',
    to: "rakshakhadka58@gmail.com",
    subject: 'Just saying Hi',
    text: 'How are u?'
};
// gmail transporter initialization
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user: "poornima.mrsn@gmail.com",
        pass: "lol",
    }
});
const mailer = async (mailOptions, transporter) =>{
    console.log("sending email....")
    const info = await transporter.sendMail(mailOptions);
    console.log({info: info.response});
};
mailer(mailOptions, transporter).catch(console.error);



// callback function:
// transporter.sendMail(mailOptions, (error, info) =>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log('Email sent '+ info);
//     }
// });