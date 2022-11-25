import { useFormikContext } from "formik";
import { useEffect } from "react";
import TextBox from "../Controls/TextBox";
import { IForm } from "../Models/IForm";

export default function ItemForm() {
  const { values } = useFormikContext<IForm>();
  // useEffect(() => {
  //   if (props) {
  //     //console.log('item', props);
  //     setValues(props);
  //   }
  // }, [props]);
  return (
    <div>
      <TextBox id="name" name="Name" label="Name" value={values.name} />
      {/* <TextBox id="age" name="age" label="Age" value={values.age.toString()} /> */}
    </div>
  )
}