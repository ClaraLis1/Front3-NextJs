import { Layout } from '@/component/layout/Layout';
import { Card } from '@/component/ui/card/Card';

import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getCharacter, getCharacters } from '@/service';
import { Character } from '@/interface';

interface Props {
  character : Character
}


const CharacterPage: NextPage<Props>= ({character}) => {
   
  return (
    <Layout title='Character'>     
      <Card character={character}></Card>    
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async ({locales}) => {
  const idiomas = locales as string[]
  const  data = await getCharacters()
  const paths = data.flatMap((character) => (
    idiomas.map((idioma) => ({params:{id:character.tail},locale: idioma }))
    ))
  console.log(paths.length);
  
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps : GetStaticProps = async ({params}) => {
  const id = params?.id as string
  const character = await getCharacter(id)
     
  return {
    props:{
      character:character
    }
  }
}

export default CharacterPage