import CardsComp from "./CardsComp";
import { useAtom } from "jotai";
import CardsAtom from "../Store/CardStore";
import { useMemo } from "react";

const CardContainer = () => {
  const [cardVals, setCardVals] = useAtom(CardsAtom);

  let elements = useMemo(() => {
    console.log("creating cards from cardVals");
    return cardVals.map((item, key) => <CardsComp key={key} myKey={item.myKey} name={item.name} power={item.power} text={item.text} image={item.image} />);
  }, [cardVals]) 

  return (
    <>{elements}</>
  )
}

export default CardContainer;