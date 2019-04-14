var config = require('./config')
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(config);

//
var sendNotification = (email, url, userName, website) => {
  htmlMsg = 'You got a package from ' + userName + '. Please use the link <a href=';
  htmlMsg += website
  htmlMsg += '/';
  htmlMsg += url + '>' + 'here </a> \n'

  const msg = {
    to: email,
    from: 'Notification@delivrr.com',
    subject: 'Incoming Package Notification',
    html: htmlMsg,
  };

  sgMail.send(msg);
}

// Example of using the sendNotification
// sendNotification("wpvuong@ucsd.edu", "something", "William Vuong", "https://c9a7fd17.ngrok.io");
module.exports = sendNotification;
