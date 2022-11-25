import Button from 'react-bootstrap/Button'

interface IButton {
    value: string;
}
const clickButton = (props: IButton) => {
  return <Button value={"test"}></Button>
}
export default clickButton;