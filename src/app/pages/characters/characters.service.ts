import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CharactersService {
  async getCharacters() {
    const response = await fetch('https://api.potterdb.com/v1/characters');
    const data = await response.json();
    return data.data.filter((character: any) => character.attributes.image && character.attributes.wiki);
   }

}