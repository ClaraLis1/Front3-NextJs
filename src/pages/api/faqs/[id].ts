import faqs  from '@/data/faqs'
import {NextApiRequest, NextApiResponse} from 'next'


// type Data = Faq[] | {message:string}
// crear un util para validar el id y llamarlo desde aca

export default function handler (req : NextApiRequest, res : NextApiResponse){
    const {id} = req.query

    if(req.method==="GET"){
      const faq= faqs.find(faq => faq.id == Number(id))
      if(!faq) return res.status(404).json({message: `no existe id ${id}`})
        else  res.status(200).json(faq)
    }
    if(req.method==="PUT"){
        const faqUpdate= faqs.find(faq => faq.id == Number(id))
        if(!faqUpdate) return res.status(404).json({message: `no existe id ${id}`})
    //    return res.status(200).json(faq)
        const {question, answer} = req.body
        if(!question || !answer) return res.status(400).json({message: `${req.body}`})

        faqUpdate.question = question
        faqUpdate.answer = answer
        return res.status(200).json(faqUpdate)
  }

else{
    return res.status(400).json({message:"no autorizado"})
}
}