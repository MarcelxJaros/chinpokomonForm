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


export default function ItemFormComp() {

  const onSubmit = async (values: IForm, formikHelpers: FormikHelpers<IForm>): Promise<any> => {
    console.log("submiting!")
    console.log(values)
    await new Promise(resolve => setTimeout(resolve, 1000))
    formikHelpers.resetForm();
  }

  return (
    <Formik initialValues={FormInitVals} onSubmit={onSubmit} validationSchema={FormSchema}>
      {(props) => (
        <Form style={{ width: 400, margin: 50 }}>
          {/* <Field /> will automagically hook up inputs to Formik. It uses the name attribute to match up with Formik state. */}
          <CustomInput
            label="Name"
            name="name"
            type="text"
            placeholder="your name"
          />
          <CustomInput
            label="Age"
            name="age"
            type="number"
            placeholder="your age"
          />
          <CustomInput
            label="Image"
            name="image"
            type="text"
            placeholder="paste image url"
          />
          <Button className="myButton" type="submit" variant="primary" size="lg">Submit</Button>
          <Button className="myButton" type="reset" variant="secondary" size="lg" onClick={ () => props.resetForm()}>Clear</Button>


        </Form>

      )}


    </Formik>
  )
}