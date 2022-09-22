import type { NextApiRequest, NextApiResponse } from 'next'

const mail = require('@sendgrid/mail')

type Data = {
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  mail.setApiKey(process.env.SENDGRID_API_KEY)
  const body = req.body
  const message = `
    Name: ${body.name} \r\n
    Email: ${body.email} \r\n
    Message: ${body.message} \r\n
  `
  const emailData = {
    to: 'delita.blackdragon@gmail.com',
    from: 'portfolio@swilsoncode.dev',
    subject: 'New Contact message from swilsoncode.dev',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }
  mail.send(emailData).then(() => {
    res.status(200).json({ status: 'Ok' })
  })
}
