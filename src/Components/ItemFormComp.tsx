import { Formik, FormikHelpers, Form, useFormik, useFormikContext } from "formik";
import { useCallback, useEffect } from "react";
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

export default function ItemFormComp() {
  const [cardVals, setCardVals] = useAtom(CardsAtom);
  
  const onSubmit = async (values: IForm, formikHelpers: FormikHelpers<IForm>): Promise<any> => {
    console.log("submiting!")
    console.log(values)
    await new Promise(resolve => setTimeout(resolve, 1000))
    formikHelpers.resetForm();
    // values = { ...values, myKey: uuidv4(), text: "bla" }
    // let test = {myKey: uuidv4(), text: "bla", name: "pok", image: "1"}
    let values1 = { ...values, myKey: uuidv4(), text: "bla"}
    setCardVals((currItems) => {
      return [...currItems, values1];
    });
  }
  console.log(FormSchema.fields)
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
            required={false}
          />
          <CustomInput
            label="Image"
            name="image"
            placeholder="paste image url"
          />
          <Button className="myButton" type="submit" variant="primary" size="lg">Submit</Button>
          <Button className="myButton" type="reset" variant="secondary" size="lg" onClick={ () => props.resetForm()}>Clear</Button>


        </Form>

      )}


    </Formik>
  )
}