import { Character } from '@/interface'
import { log } from 'console'
import Image from 'next/image'
import { useRouter } from 'next/router'
import{FC} from 'react'

interface Props{
    character:Character
}

export const Card: FC <Props> = ({character}) => {
  const router = useRouter()

  const handleClick = ()=>{
    console.log("click");
    
   
    router.push(`/character/${character.tail}`)
    
    
  }

  return (
    <div  onClick={handleClick} >
        <h3>{character.name}</h3>
        <Image 
          src={character.image}
          alt={character.name}
          width={180}
          height={250}
          priority={true} />
        </div>
  )
}

