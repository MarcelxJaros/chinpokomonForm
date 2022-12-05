import { Formik, FormikHelpers, Form, useFormik, useFormikContext } from "formik";
import { useCallback, useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import { FormInitVals } from "../Constants/FormInit";
import TextBox from "../Controls/TextBox";
import { IForm } from "../Models/IForm";
import '../App.css';
import FormSchema from "../Schemas/FormSchema";
import CustomInput from "./CustomInput";
import { ColumnActionsMode } from "@fluentui/react";
import { useAtom } from "jotai";
import CardsAtom from "../Store/CardStore";
import { v4 as uuidv4 } from 'uuid';
import { ICards } from "../Models/ICards";
import Tooltip from "react-bootstrap";
import jokeStore from "../Store/JokeStore";
import axios from "axios";
import loading from "../Store/LoadingStore";

export default function ItemFormComp() {
  const [cardVals, setCardVals] = useAtom(CardsAtom);
  const [joke, setJoke] = useAtom(jokeStore);
  const [isLoading, setIsLoading] = useAtom(loading);
  let sum = 0;

  const getJoke = async () => {
    const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
    console.log("res:", res);
    return (`${res.data.setup} ${res.data.punchline}`);
  }

  useEffect(() => {
    console.log("fungujem");
    getJoke().then((joke) => { setJoke(joke); setIsLoading(false) });
  }, []);

  // const getPower = useMemo(() => {
  //   sum = 0;
  //   cardVals.forEach(result => sum += Number(result.power));
  //   console.log("expensive calc:", sum)
  //   return sum;
  // }, [result])

  // const getPowerLevel = () => {
  //   //console.log(getPower)
  //   let result = cardVals.map(monster => Number(monster.power));
  //   console.log("array of power:", getPower)
  // }

  const onSubmit = async (values: IForm, formikHelpers: FormikHelpers<IForm>): Promise<any> => {
    console.log("submiting!")
    console.log(values)
    setIsLoading(true)
    // await new Promise(resolve => setTimeout(resolve, 1000))

    formikHelpers.resetForm();
    let values1 = { ...values, myKey: uuidv4(), text: (values.joke ? values.joke : joke) }
    setCardVals((currItems) => {
      return [...currItems, values1];
    });
    setJoke("")
    await getJoke().then((joke) => { setJoke(joke); setIsLoading(false) });
  }
  // console.log(FormSchema.fields)
  return (
    <Formik initialValues={FormInitVals} onSubmit={onSubmit} validationSchema={FormSchema}>
      {(props) => (
        <Form style={{ width: 400, margin: 50 }}>
          {/* <Field /> will automagically hook up inputs to Formik. It uses the name attribute to match up with Formik state. */}
          <CustomInput
            label="Name"
            name="name"
            placeholder="name of your battle monster"
          />
          <CustomInput
            label="Power"
            name="power"
            type="number"
            placeholder="monster power level"
          />
          <CustomInput
            label="Favourite joke"
            name="joke"
            placeholder={joke ? (`(Optional, leave blank to use this text): \n${joke}`) : "Loading..."}
            required={false}
            as="textarea"
            rows={4}
          />
          <CustomInput
            label="Image"
            name="image"
            placeholder="paste image url"
          />
          <Button className="myButton" type="submit" variant="primary" size="lg">Submit</Button>
          <Button className="myButton" type="reset" variant="secondary" size="lg" onClick={() => props.resetForm()}>Clear</Button>
        </Form>

      )}


    </Formik>
  )
}