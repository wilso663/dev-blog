import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
const mail = require('@sendgrid/mail')

type Data = {
  status: string,
  [fieldName: string]: string;
}

const verifyRecaptcha = async (token:string) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  var verificationURL = 
  "https://google.com/recaptcha/api/siteverify?secret=" +
  secretKey + "&response=" + token;

  return await axios.post(verificationURL)
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    //Captcha Verification
    const token = req.body.token;
    const response = await verifyRecaptcha(token)
    if(response.data.success && response.data.score >= 0.5){
      //Email setup
      mail.setApiKey(process.env.SENDGRID_API_KEY)
      const body = req.body
      const message = `
        Name: ${body.name} \r\n
        Email: ${body.email} \r\n
        Message: ${body.message} \r\n
      `
      const emailData = {
        to: process.env.PERSONAL_EMAIL,
        from: 'portfolio@swilsoncode.dev',
        subject: 'New Contact message from swilsoncode.dev',
        text: message,
        html: message.replace(/\r\n/g, '<br>')
      
      }
      res.status(200).json({ status: 'Ok' })
    } else {
      return res.status(400).json({
        status: 'Failed',
        message: 'The Captcha Service determined this submission was spam.'
      })
    }
  // mail.send(emailData).then(() => {
  //   res.status(200).json({ status: 'Ok' })
  // })

  } catch(error){
    res.status(400).json({
      status: 'Failed',
      message: 'Something went wrong with the Captcha service. Please try again.',
    })
  }
}
