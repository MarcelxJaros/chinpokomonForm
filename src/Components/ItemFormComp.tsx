import { Formik, FormikHelpers, Form } from "formik";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { FormInitVals } from "../Constants/FormInit";
import { IForm } from "../Models/IForm";
import '../App.css';
import FormSchema from "../Schemas/FormSchema";
import CustomInput from "./CustomInput";
import { useAtom } from "jotai";
import CardsAtom from "../Store/CardStore";
import { v4 as uuidv4 } from 'uuid';
import jokeStore from "../Store/JokeStore";
import axios from "axios";
import loading from "../Store/LoadingStore";

export default function ItemFormComp() {
  const [cardVals, setCardVals] = useAtom(CardsAtom);
  const [joke, setJoke] = useAtom(jokeStore);
  const [isLoading, setIsLoading] = useAtom(loading);

  const getJoke = async () => {
    const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
    console.log("res:", res);
    return (`${res.data.setup} ${res.data.punchline}`);
  }

  useEffect(() => {
    setIsLoading(true)
    getJoke().then((joke) => { setJoke(joke); setIsLoading(false) });
  }, []);

  const onSubmit = async (values: IForm, formikHelpers: FormikHelpers<IForm>): Promise<any> => {
    console.log("submiting!")
    console.log(values)
    setIsLoading(true)
    formikHelpers.resetForm();
    let values1 = { ...values, myKey: uuidv4(), text: (values.joke ? values.joke : joke) }
    setCardVals((currItems) => {
      return [...currItems, values1];
    });
    setJoke("")
    await getJoke().then((joke) => { setJoke(joke); setIsLoading(false) });
  }

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
          <Button className="myButton" type="submit" variant="primary" size="lg" disabled={isLoading}>Submit</Button>
          <Button className="myButton" type="reset" variant="secondary" size="lg" onClick={() => props.resetForm()}>Clear</Button>
        </Form>

      )}

    </Formik>
  )
}