const nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_email_password'
    }
});

// send mail with defined transport object
function sendEmail() {
    let mailOptions = {
        from: 'your_email@gmail.com',
        to: 'recipient_email@example.com',
        subject: 'Applied successfully',
        text: 'Prepare well..!!'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Email sent: ' + info.response);
        }
    });
}