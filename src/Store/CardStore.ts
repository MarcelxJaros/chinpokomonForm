import { atom } from 'jotai';
import { ICards } from '../Models/ICards';
import { v4 as uuidv4 } from 'uuid';
const cardVals: ICards[] = [
  {
    myKey: uuidv4(),
    name: "Roidrat",
    text: "lorem ipsum",
    image: "https://static.wikia.nocookie.net/spsot/images/f/ff/Ic_unlock_cpm_roiderat.png"
  },
  {
    myKey: uuidv4(),
    name: "Gunrilla",
    text: "lorem ipsum",
    image: "https://static.wikia.nocookie.net/spsot/images/5/5b/Ic_unlock_cpm_gunrilla.png"
  },
  {
    myKey: uuidv4(),
    name: "Sna-kat",
    text: "lorem ipsum",
    image: "https://static.wikia.nocookie.net/southpark/images/6/65/Ic_unlock_cpm_snakat.png"
  },
]

const CardsAtom = atom<ICards[]>(cardVals);

export default CardsAtom;