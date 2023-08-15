import { Character } from '@/interface'
import Image from 'next/image'
import { useRouter } from 'next/router'
import{FC} from 'react'

interface Props{
    character:Character
}

export const CardDetail: FC <Props> = ({character}) => {  

  return (
    <div   >
        <h3>{character.name}</h3>
        <Image 
          src={character.image}
          alt={character.name}
          width={180}
          height={250}
          priority={true} />
        <h3>Game: {character.gameSeries}</h3>
        </div>
  )
}

