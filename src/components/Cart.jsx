import { useContext, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../contexts/CartContext";

const clearBuyer = { name: "", phone: "", email: "" };

export const Cart = () => {
  const [buyer, setBuyer] = useState(clearBuyer);

  const { clear, items, deleteItem } = useContext(CartContext);

  const total = items.reduce(
    (acumulado, actual) => acumulado + actual.price * actual.quantity,
    0
  );

  const handleSendOrder = () => {
    const order = { buyer, items, total };

    const db = getFirestore();

    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert("Su orden " + id + "ha sido completada!");
        }
      })
      .finally(() => {
        setBuyer(clearBuyer);
        clear();
      });
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;

    setBuyer((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  if (!items.length) return <div>No hay productos en tu carrito.</div>;

  return (
    <Container>
      <button onClick={clear}>Vaciar carrito</button>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <img src={item.imageId} width={150} />
            <p>Cantidad: {item.quantity}</p>
            <p>{item.price}</p>
            <button onClick={() => deleteItem(item.id)}>X</button>
          </div>
        ))}
      </div>
      <h1>Total de tu compra: ${total}</h1>
      <form action="">
        <div className="input-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            value={buyer.name}
            onChange={handleChange}
            required
            name="name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Teléfono</label>
          <input
            type="text"
            value={buyer.phone}
            onChange={handleChange}
            required
            name="phone"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            value={buyer.email}
            onChange={handleChange}
            required
            name="email"
          />
        </div>
        <button type="submit" onClick={handleSendOrder}>
          Comprar
        </button>
      </form>
    </Container>
  );
};
