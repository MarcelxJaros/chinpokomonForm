import { useId } from "@fluentui/react-hooks";
import { ICards } from "../Models/ICards";
import CardsComp from "./CardsComp";
import { v4 as uuidv4 } from 'uuid';
import { useAtom } from "jotai";
import CardsAtom from "../Store/CardStore";
import { useMemo } from "react";

const CardContainer = () => {
  const [cardVals, setCardVals] = useAtom(CardsAtom);

  // let elements1 = cardVals.map((item, key) => {
  //   console.log("creating cards from cardVals");
  //   return <CardsComp key={key} myKey={item.myKey} name={item.name} power={item.power} text={item.text} image={item.image} />
  // }); //3x edit, 3x close, 3x save

  // let elements1 = () => {
  //   console.log("creating cards from cardVals");
  //   return cardVals.map((item, key) => <CardsComp key={key} myKey={item.myKey} name={item.name} power={item.power} text={item.text} image={item.image} />)
  // };
  // let elements = cardVals.map( (item, key) => <CardsComp key={key} myKey={item.myKey} name={item.name} power={item.power} text={item.text} image={item.image} />);

  let elements = useMemo(() => {
    console.log("creating cards from cardVals");
    return cardVals.map((item, key) => <CardsComp key={key} myKey={item.myKey} name={item.name} power={item.power} text={item.text} image={item.image} />);
  }, [cardVals]) //1x save

  return (
    <>{elements}</>
  )
}

export default CardContainer;