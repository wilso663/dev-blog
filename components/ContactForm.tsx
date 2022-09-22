import { ToastContainer, toast } from "react-toastify"
import { useGoogleReCaptcha, GoogleReCaptcha } from "react-google-recaptcha-v3"
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useRef, createRef } from "react"
import {useForm, useFormState} from 'react-hook-form'
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

  const {register, handleSubmit, setError, reset, formState, formState: {isSubmitting, isSubmitSuccessful, errors}} = useForm();
  
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    if(formState.isSubmitSuccessful){
      reset({name: '', email: '', message: ''})
    }
  },[formState,reset])

  const onSubmit = async (data: object) => {

    if(!executeRecaptcha){
      return;
    }

    try{
      const token = await executeRecaptcha()
      const dataWithToken = {
        token,
        ...data
      }
      const response = await saveFormData(dataWithToken)
      if(response.status === 400) {
        //Expect response to be a JSON response with structure
        //{"fieldName": "error message for that field"}
        const fieldToErrorMessage: {[fieldName: string]: string} = await response.json()
        for(const [fieldName, errorMessage] of Object.entries(fieldToErrorMessage)){
          setError(fieldName, {type: 'custom', message: errorMessage})
        }
      } else if ( response.ok) {
        toast.success("Successfully sent")
      } else {
        toast.error("An unexpected error occurred while saving, please try again.")
      }
    } catch(error){
      toast.error("An unexpected error occurred while saving, please try again.")
      
    }

  }

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '68rem'}}>
      <GoogleReCaptcha onVerify={t => console.log({ t })}/>
      <div className="flex w-full mb-4 flex-col md:flex-row" >
        <label htmlFor="name">
        </label>
        <input className="rounded-md flex-1 md:mr-2 px-4 py-2" 
               placeholder="Enter your name" 
               type="text" 
               required={true} 
               {...register("name", {required: true})} 
               style={{backgroundColor: "#f9f9f9"}}/>
        <div className="error text-red-500">{errors["name"]?.message as string}</div>
        <label htmlFor="email">
        </label>
        <input className="rounded-md flex-1 mt-4 md:mt-0 md:ml-2 px-4 py-2" 
               placeholder="Enter your email address" 
               type="email" 
               required={true} 
               autoComplete="email" 
               {...register("email", {required: true})} 
               style={{backgroundColor: "#f9f9f9"}} />
        <div className="error text-red-500">{errors["email"]?.message as string}</div>
      </div>
      <label htmlFor="message">        
      </label>
      <textarea className="rounded-md block w-full px-4 py-2" 
                placeholder="Enter your message" 
                required={true}
                rows={4} 
                style={{backgroundColor: "#f9f9f9"}}
                {...register('message', {required: true})}>
      </textarea>
      <div className="error text-red-500">{errors["message"]?.message as string}</div>

      <button className="bg-black px-6 py-2 text-white rounded-md  flex mt-5 items-center hover:text-green-500" 
              disabled={isSubmitting}>
        {!isSubmitting ? 
        <svg className="mr-3 fill-current" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="#FFF" 
        width="18" 
        height="18" 
        viewBox="0 0 24 24">
          <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/>
        </svg> : ''}
        {isSubmitting ? <LoadingSpinner/> : "Send"}
      </button>
      <ToastContainer position="bottom-center" />
    </form>
  );
}

export default ContactForm