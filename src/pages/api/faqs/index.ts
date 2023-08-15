import { faqs } from '@/data/faqs'
import { Faq } from '@/interface/faq'
import { METHODS } from 'http'
import {NextApiRequest, NextApiResponse} from 'next'

type Data = Faq[] | {message:string}

export default function handler (req : NextApiRequest, res : NextApiResponse<Data>){
    // consultar el metodo de la peticion
    if(req.method==="GET"){
        return res.status(200).json(faqs)

    }else{
        return res.status(405).json({message:"no autorizado"})
    }
}