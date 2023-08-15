import { Character } from "@/interface";

export const getCharacter = async (id:string): Promise<Character> => {
    const character = await fetch(`https://www.amiiboapi.com/api/amiibo/?tail=${id}`)
    const rest = await character.json();
    return rest.amiibo[0]
  }