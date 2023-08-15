import { Layout } from '@/component/layout/Layout'
import { Faq } from '@/interface/faq'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const FaqsPage = () => {
  const [faq, setFaq] = useState({} as Faq)
  const {query} = useRouter()
  const id = query.id

  const getFaq =async () => {
    if(id){
      const response = await fetch(`/api/faqs/${id}`)
      const data = await response.json()
      setFaq(data)
    }
  }

  useEffect(()=>{
    getFaq()
  },[id])
    
  return (
    <Layout title='Preguntas Frecuentes'>
      {faq.question?
      <>
        <h1>{faq.question}</h1>
        <h2>{faq.answer}</h2>

      </>:
       <>
       <h1> No hay una pregunta para ese id</h1>      

     </>
      }
      
        
    </Layout>
  )
}

export default FaqsPage