import { atom } from 'jotai';
import { ICards } from '../Models/ICards';
import { v4 as uuidv4 } from 'uuid';
const cardVals: ICards[] = [
  {
    myKey: uuidv4(),
    name: "Roidrat",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    power: "7",
    image: "https://static.wikia.nocookie.net/spsot/images/f/ff/Ic_unlock_cpm_roiderat.png"
  },
  {
    myKey: uuidv4(),
    name: "Gunrilla",
    text: "Where do programmers like to hangout? The Foo Bar.",
    power: "5",
    image: "https://static.wikia.nocookie.net/spsot/images/5/5b/Ic_unlock_cpm_gunrilla.png"
  },
  {
    myKey: uuidv4(),
    name: "Sna-kat",
    text: "Why are fish easy to weigh? Because they have their own scales.",
    power: "1",
    image: "https://static.wikia.nocookie.net/southpark/images/6/65/Ic_unlock_cpm_snakat.png"
  },
]

const CardsAtom = atom<ICards[]>(cardVals);

export default CardsAtom;