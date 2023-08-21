import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavBarIcon = ({ icon, height, color }) => {
  return <FontAwesomeIcon style={{height: height, color: color}} icon={icon} />;
};

export default NavBarIcon;
