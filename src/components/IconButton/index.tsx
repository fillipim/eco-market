import { IconType } from "react-icons";
import { Button } from "../Button";

export interface iIconButtonProps {
  icon: IconType;
}

const IconButton: React.FC<iIconButtonProps> = ({ icon: Icon }) => (
  <Button variant="icon-button">
    <Icon/>
  </Button>
);


export default IconButton;