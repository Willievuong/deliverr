var config = require('./config')
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(config);

//
var sendNotification = (email, url, userName) => {
  //htmlMsg = "You got a package from " + userName + ". Please use the link <a href="http://a04e3d09.ngrok.io/getmail/sdsd">here </a>";

  const msg = {
    to: email,
    from: 'Notification@delivrr.com',
    subject: 'Incoming Package Notification',
    html: 'You got a package from ' + userName + '. Please use the link <a href= + website' + '/' + url + '>' + 'here </a> \n',
  };

  sgMail.send(msg);
}

// Example of using the sendNotification
// sendNotification("wpvuong@ucsd.edu", "something", "William Vuong", "https://c9a7fd17.ngrok.io");
module.exports = sendNotification;
