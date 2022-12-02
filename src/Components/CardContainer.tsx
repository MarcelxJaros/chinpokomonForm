import { useId } from "@fluentui/react-hooks";
import { ICards } from "../Models/ICards";
import CardsComp from "./CardsComp";
import { v4 as uuidv4 } from 'uuid';
import { useAtom } from "jotai";
import CardsAtom from "../Store/CardStore";

const CardContainer = () => {
  const [cardVals1, setCardVals] = useAtom(CardsAtom);
  const cardVals = useAtom(CardsAtom);
  var elements=[];
  elements = cardVals1.map( (item, key) => <CardsComp key={key} myKey={item.myKey} name={item.name} text={item.text} image={item.image} />);
  return (
    <>{elements}</>
  )
}

export default CardContainer;