import { Layout } from '@/component/layout/Layout';
import {Card} from '@/component/ui/card/Card';
import { CardDetail } from '@/component/ui/cardDetail/CardDetail';
import Spinner from '@/component/ui/spinner/Spinner';
import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router'
import React from 'react'
import {useState, useEffect} from 'react'

const CharacterPage= () => {
  const paramId = useRouter();
  const [character, setCharacter] = useState()
  console.log(paramId.query.id);
  

  const getCharacter =async () => {
    const character = await fetch(`https://www.amiiboapi.com/api/amiibo/?tail=${paramId.query.id}`)
    const rest = await character.json();
    setCharacter(rest.amiibo[0])
  }

  useEffect(() => {    
    getCharacter()   
  }, [])

  console.log(character) 
  
  
  return (
    <Layout title='Character'>
     {character ?
      <CardDetail character={character}></CardDetail>:     
      <Spinner></Spinner>}
    </Layout>
  )
}

/*export const getStaticProps = async () => {
  const character = await fetch(`https://www.amiiboapi.com/api/amiibo/?tail=${paramId.query.id}`)
  const rest = await character.json();
  const data = rest.amiibo.slice(0,20)
     
  return {
    props:{
      character:data
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          name: 'next.js',
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  }
}
*/

export default CharacterPage