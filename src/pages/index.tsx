
import styles from '@/styles/Home.module.css'
import { Character } from '@/interface'
import { NextPage } from 'next'
import {Card} from '@/component/ui/card/Card'
import { Layout } from '@/component/layout/Layout'
import { getCharacters } from '@/service/getCharacters'
import { CONTENT_BY_LOCALE } from '@/locale';
import { useRouter } from 'next/router';


// const inter = Inter({ subsets: ['latin'] })
interface Props {
  characters: Character[]
}

 const Home: NextPage<Props>= ({characters}) =>{
  const { locale } = useRouter();
  const localeContent = CONTENT_BY_LOCALE[locale as keyof typeof CONTENT_BY_LOCALE]
	const {home} = localeContent;

  return (
    <Layout title='Home'>
        <h1>Hola Mundo</h1>
        <div className={`${styles.grid}`}>
          {characters?.map((character)=>(
            <Card key={character.tail} character={character}></Card>
          ))} 
        </div>   
    </Layout>   
    
  )
}

export const getStaticProps = async () => {
  const data = await getCharacters()
     
  return {
    props:{
      characters:data
    }
  }
}

export default Home