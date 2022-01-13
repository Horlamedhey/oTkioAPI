const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const sendinBlue = require("nodemailer-sendinblue-transport");

// const transporter = nodemailer.createTransport(
//   smtpTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     auth: {
//       user: "oktiodev@gmail.com", //config.email
//       pass: "welcome@123", //config.pass //password
//     },
//   })
// );
// const transporter = nodemailer.createTransport({
//   service: "SendinBlue",
//   auth: {
//     user: "contact@oktio.io", //config.email
//     pass: "HACBQpXJOfs12nkh", //config.pass //password
//   },
// });


const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.mail',
  port: 587,
  auth: {
    user: 'jaylan.pollich10@ethereal.email',
    pass: 'A1Y7a49RPPD9dcKJsR'
  }
})

exports.transporter = transporter;
