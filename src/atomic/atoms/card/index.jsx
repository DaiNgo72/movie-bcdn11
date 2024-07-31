import { Link } from "react-router-dom";

export function Card({ name, id, image }) {
  return (
    <>
      <img src={image} />
      <p>{name}</p>
    </>
  );
}
