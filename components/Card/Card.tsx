import React from "react";
import { User } from "../../models/user.models";

const Card = (props: any) => {
  const { data } = props;

  return <div>{data.name}</div>;
};

export default Card;