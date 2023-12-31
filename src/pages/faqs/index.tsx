
import { Layout } from '@/component/layout/Layout'
import { Faq } from '@/interface/faq'
import { NextPage } from 'next'
import styles from './Faqs.module.css'
interface Props{
  faqs: Faq[]
}
const faqsPage: NextPage<Props> = ({ faqs }) => {
  return (
    <Layout title="Preguntas Frecuentes">
      <div className={styles.container}>
        {faqs.map((faq) => (
          <div key={faq.id}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
          ))}
      </div>
     </Layout>
  )
}
export const getStaticProps = async () => {
  // Modificar la url por las que nos da Vercel al hacer deploy
  const response = await fetch('https://front3-next-js-2taw.vercel.app/api/faqs')
  const faqs = await response.json()
  return {
    props: {
      faqs
    }
  }
}
export default faqsPage

/*import React from 'react'
//mock para subir a Vercel

const FaqsPage = () => {
  return (
    <div>FaqsPage</div>
  )
}

export default FaqsPage*/
