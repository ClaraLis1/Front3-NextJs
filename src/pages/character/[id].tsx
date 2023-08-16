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
  const id = params?.id 
  try {
		const res = await fetch(
			`https://www.amiiboapi.com/api/amiibo/?tail=${id}`
		);
		const data = await res.json();
		const character = data.amiibo[0];
		return {
			props: {
				character,
			},
		};
	} catch (error) {
		console.error('No se pudo obtener el personaje', error);
		return {
			props: {
				character: {},
			}
		}
	}
	
}

export default CharacterPage