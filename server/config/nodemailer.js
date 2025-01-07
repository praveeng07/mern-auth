import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'your_host_name',
    port: 'your_host_port_number',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
});

export default transporter;
