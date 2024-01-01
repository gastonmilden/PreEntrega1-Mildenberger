import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  doc,
  getDoc
} from "firebase/firestore";
import { CartContext } from "../contexts/CartContext";
import { Container } from "react-bootstrap";
import { ItemCounter } from "./ItemCounter";

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const { onAdd } = useContext(CartContext);

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", id)

    getDoc(refDoc).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    }).finally(() => setLoading(false));
  }, [id]);

  const add = (quantity) => {
    onAdd(item, quantity);
  };

  if(loading) {
    return <>Loading</>;
  }

  return (
    <Container className="mt-5">
      <h1>{item.title}</h1>
      <img style={{width: "15rem"}} src={item.imageId} />
      <p>{item.description}</p>
      <p>${item.price}</p>
      <p>Stock: {item.stock}</p>
      <ItemCounter initial={1} stock={item.stock} onAdd={add} />
    </Container>
  );
};
