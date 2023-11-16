import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { products } from "../data/products";

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    promise.then((response) => {
      const filteres = response.find((item) => item.id == id);
      setItem(filteres);
    });
  }, [id]);

  if(!item) {
    return <>Loading</>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.pictureUrl} />
      <p>{item.description}</p>
    </div>
  );
};
