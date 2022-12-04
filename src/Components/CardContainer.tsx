import { useId } from "@fluentui/react-hooks";
import { ICards } from "../Models/ICards";
import CardsComp from "./CardsComp";
import { v4 as uuidv4 } from 'uuid';
import { useAtom } from "jotai";
import CardsAtom from "../Store/CardStore";

const CardContainer = () => {
  console.log("creating cards from cardVals");
  const [cardVals, setCardVals] = useAtom(CardsAtom);
  var elements=[];
  elements = cardVals.map( (item, key) => <CardsComp key={key} myKey={item.myKey} name={item.name} power={item.power} text={item.text} image={item.image} />);
  return (
    <>{elements}</>
  )
}

export default CardContainer;