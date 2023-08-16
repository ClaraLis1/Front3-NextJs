import { describe, test } from "node:test";
import httpMocks from "node-mocks-http"
import { NextApiRequest, NextApiResponse } from "next";
import handler from "@/pages/api/faqs";

describe('test en faqs api', ()=>{
    test("debería retornar los datos correctos y su status",async ()=>{
        const req = httpMocks.createRequest<NextApiRequest>({
            method: "GET"
        })
        const res = httpMocks.createResponse <NextApiResponse>()
        await handler(req, res)
        const data = res._getJSONData()

        console.log(data);
        
    })
})