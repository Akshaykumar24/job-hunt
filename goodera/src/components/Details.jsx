import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { url } from "../utils/url";

const Details = () => {
  const [item, setItem] = useState({});
  const param = useParams();
  const id = param.id;
  useEffect(() => {
    axios.get(`${url}/job/${id}`).then(({ data }) => setItem(data.jobs));
  });
  return (
    <div>
      Details of the job will be shown here
      <h2>Title: {item.title}</h2>
      <p>Description: {item.description}</p>
      <p>Location: {item.location}</p>
      <p>Level: {item.level}</p>
    </div>
  );
};

export default Details;
