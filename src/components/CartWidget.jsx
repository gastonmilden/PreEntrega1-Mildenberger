import { Link } from "react-router-dom";
import { useContext } from "react";
import cart from "../assets/cart.png";
import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const totalProducts = items.reduce(
    (acumulador, actual) => acumulador + actual.quantity,
    0
  );

  return (
    <Link to="/cart">
      <img src={cart} alt="changuito" width="30" />
      <span>{totalProducts}</span>
    </Link>
  );
};
