import { Character } from "@/interface";

export const getCharacters = async() : Promise<Character[]>=> {
    const character = await fetch('https://www.amiiboapi.com/api/amiibo')
    const rest = await character.json();
    const data = rest.amiibo.slice(0,20)
    return data
}