import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./layout.module.css";
const Header = ({ onShowCart }) => {
     const cartCount = 3;
  return (
    <Navbar  expand="sm" className={`${styles.header} p-3 `}>
      <Container>
        <Navbar.Brand href="/" className="fs-2 fw-bold text-white py-2">ReactMeals</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
         <button className={`${styles.cartBtn} btn border-none p-3 text-white rounded-pill px-5 mx-auto mx-sm-0 ms-sm-auto  d-flex align-items-center justify-content-sm-center gap-3 fw-semibold`}
         onClick={onShowCart}>
              <FaShoppingCart size={20} /> Your Cart <span className={`${styles.counter} px-3 py-1 text-white rounded-pill fw-semibold`}>{cartCount}</span>
         </button>
         {/* djddddddd */}
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;