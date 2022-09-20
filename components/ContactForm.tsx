import { useState } from "react"
import {useForm} from 'react-hook-form'
import LoadingSpinner from './LoadingSpinner'

interface FormPost {
  name: string
  email: string
  message: string
}

type Props = {
  submitContact: (event: React.FormEvent, formData: FormPost) => void
}


async function saveFormData(data: object) {
  return await fetch("/api/form", {
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"},
      method: "POST"
  })
}

const ContactForm: React.FC = () => {

  const {register, handleSubmit, formState: {isSubmitting}} = useForm();

  return (
    <form className="" onSubmit={handleSubmit(saveFormData)} style={{maxWidth: '68rem'}}>
      <div className="flex w-full mb-4 flex-col md:flex-row" >
        <label htmlFor="name"></label>
        <input className="rounded-md flex-1 md:mr-2 px-4 py-2" placeholder="Enter your name"type="text" required={true} {...register("name", {required: true})} style={{backgroundColor: "#f9f9f9"}}/>
        <label htmlFor="email"></label>
        <input className="rounded-md flex-1 mt-4 md:mt-0 md:ml-2 px-4 py-2" placeholder="Enter your email address" type="email" required={true} autoComplete="email" {...register("email", {required: true})} style={{backgroundColor: "#f9f9f9"}} />
      </div>
      <label htmlFor="message"></label>
      <textarea className="rounded-md block w-full px-4 py-2" placeholder="Enter your message" rows={4} name="message" style={{backgroundColor: "#f9f9f9"}}></textarea>
      <label htmlFor="message"></label>
      <button className="bg-black px-6 py-2 text-white rounded-md  flex mt-5 items-center hover:text-green-500" disabled={isSubmitting}>
        {!isSubmitting ? <svg className="mr-3 fill-current" xmlns="http://www.w3.org/2000/svg" fill="#FFF" width="18" height="18" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg> : ''}
        {isSubmitting ? <LoadingSpinner/> : "Send"}
      </button>
    </form>
  );
}

export default ContactForm