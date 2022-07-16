import React from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const toDo = useSelector((state) =>
    state.find((toDo) => toDo.id === parseInt(id))
  );

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created At: {toDo?.id}</h5>
    </>
  );
}

export default Detail;
