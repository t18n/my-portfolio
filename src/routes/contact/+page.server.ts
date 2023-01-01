import type { Actions } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY, MY_EMAIL, SENDGRID_SENDER_EMAIL } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().trim().min(2, { message: "C'mon, give me a good name." }),
  email: z.string().trim().email().min(1, { message: "C'mon, give me a good email address." }),
  message: z.string().min(30, { message: "Must be 30 or more characters long." })
});

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const contactData = contactFormSchema.safeParse(formData);

    sgMail.setApiKey(SENDGRID_API_KEY);

    if (!contactData.success) {
      const errors = contactData.error.errors.map((error) => {
        return {
          field: error.path[0],
          message: error.message
        };
      });

      return fail(400, { error: true, errors });
    }

    try {
      // Send email to me
      await sgMail.send({
        to: MY_EMAIL,
        from: `My Website <${SENDGRID_SENDER_EMAIL}>`,
        replyTo: `${contactData.data.name} <${contactData.data.email}>`,
        subject: `Contact form: Message from ${contactData.data.name} <${contactData.data.email}>`,
        text: contactData.data.message,
      });

      // Send a confirmation email to the sender
      await sgMail.send({
        to: contactData.data.email,
        from: SENDGRID_SENDER_EMAIL,
        replyTo: SENDGRID_SENDER_EMAIL,
        subject: `Thanks for reaching out!`,
        html: `Hi ${contactData.data.name},
        <br /><br />
        Just want to let you know that I got your message:
        <blockquote>${contactData.data.message}</blockquote>
        <br /><br />I'll get back to you as soon as I can. Thanks for reaching out!
        <br /><br />Best regards,
        <br />Turbo`,
      });

      return { success: true };
    } catch (error) {
      console.error('Error:', error.response.body.errors);
      return fail(500, { error: true, errors: 'Ooops, something\'s wrong. I cannot receive your email atm. Please message me via my LinkedIn: https://www.linkedin.com/in/turboninh/', status: 500 });
    }
  }
};
