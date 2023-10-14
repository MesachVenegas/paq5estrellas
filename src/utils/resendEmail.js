import { Resend } from 'resend';

const resend = new Resend('re_9c48nFR3_CZvMeG65phzZaQCBxN5dZgg6');

resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'mesach.venegas@hotmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});