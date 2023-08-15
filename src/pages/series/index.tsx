import { Layout } from '@/component/layout/Layout'
import { Series } from '@/interface/series'
import { GetServerSideProps, NextPage } from 'next'
import React from 'react'

interface Props{
    series:Series[]
}

const SeriesPage: NextPage<Props> = ({series}) => {
  return (
    <Layout title='Series'>
        <h1>series</h1>
        <div></div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps =async ({req, res}) => {
    const response = await fetch("https://amiiboapi.com/api/amiiboseries/")
    const series = await response.json()
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate')
    return{
        props:{
            series  
        }
    }  
}
 
export default SeriesPage