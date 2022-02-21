const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'va.test.933@yandex.ru',
        pass: 'lusthxxlzhtycbxi',
    },
});
function sendMail(email) {
    return transporter.sendMail({
        from: 'va.test.933@yandex.ru',
        to: email,
        subject: '✔DigitalSchool✔',
        text: 'Вы приняты в школу цифровой графики, в блшижайшее время с вами свяжется наш администратор.', // plain text body
    });
}
module.exports = sendMail;
