import { Character } from '@/interface'
import Image from 'next/image'
import{FC} from 'react'

interface Props{
    character:Character
}

const Card: FC <Props> = ({character}) => {
  return (
    <div >
        <h3>{character.name}</h3>
        <Image src={character.image} alt={character.name} width={180} height={250} />
        </div>
  )
}

export default Card