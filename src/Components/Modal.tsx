import { useAtom } from "jotai";
import { Button, Modal } from "react-bootstrap";
import modalSettings from "../Store/ModalStore";
import CustomInput from "./CustomInput";
import { Formik, FormikHelpers, Form } from "formik";
import { IEditForm } from "../Models/IEditForm";
import EditSchema from "../Schemas/EditSchema";
import itemToEditStore from "../Store/ItemToEditStore";
import CardsAtom from "../Store/CardStore";

const EditModal = () => {
  console.log("modal is rendered");
  const [showModal, setShowModal] = useAtom(modalSettings);
  const [itemToEdit, setItemToEdit] = useAtom(itemToEditStore);
  const [cardVals, setCardVals] = useAtom(CardsAtom);

  const handleClose = () => setShowModal(false);

  const handleChange = (values: IEditForm) => {
    setCardVals(currState => {
      const newState = currState.map(obj => {
        if (obj.myKey === values.myKey) {
          return { ...obj, text: values.text, power: values.power };
        }
        return obj;
      });
      return newState;
    });
  }
  
  const onSubmit = (values: IEditForm, formikHelpers: FormikHelpers<IEditForm>): void => {
    console.log("editing!")
    console.log(values);
    handleChange(values);
    handleClose();
  }

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editing {itemToEdit.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Hello there!! Anyone can make a mistake ;) </Modal.Body>

      <Formik initialValues={itemToEdit} onSubmit={onSubmit} validationSchema={EditSchema}>
        {(props) => (
          <Form id='my-form' style={{ margin: 10 }}>
            {/* <CustomInput /> will automagically hook up inputs to Formik. It uses the name attribute to match up with Formik state. */}
            <CustomInput
              label="Text"
              name="text"
              rows={7}
              as="textarea"
            />
            <CustomInput
              label="Power"
              name="power"
              type="number"
            />
          </Form>
        )}
      </Formik>
      <Modal.Footer style={{ display: 'flex', justifyContent: 'left' }}>
        {/* adding "form" attribute to match with Form "id" attribute, so submit button can be triggered outside of Form componenet */}
        <Button form='my-form' variant="primary" type="submit" onClick={() => onSubmit}>Save Changes</Button>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal >
  )
}

export default EditModal;