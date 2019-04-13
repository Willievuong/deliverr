var config = require('./config')

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config);
const msg = {
  to: 'wpvuong@ucsd.edu',
  from: 'Notification@delivrr.com',
  subject: 'Incoming Package Notification',
  html: 'You got a package from Stanley Lee!',
};

console.log("Message: " + msg['subject']);
sgMail.send(msg);