import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Small = ({ p }) => {
  const history = useNavigate();
  const detailPage = () => {
    history(p._id);
  };
  return (
    <Sma>
      <div></div>
      <div>
        <h2>{p.title}</h2>
        <p>{p.description}</p>
        <button onClick={detailPage}>View Details</button>
      </div>
    </Sma>
  );
};

export default Small;

const Sma = styled.div`
  background-color: white;
  width: 42%;
  margin: 20px;
  padding: 20px;
  display: flex;
  border-radius: 15px;
  > :first-child {
    width: 100%;
    background-color: #c4c4c4;
    height: 100%;
    border-radius: 8px;
  }
  h2 {
    margin: 2px;
    padding-left: 10px;
    font-size: 24px;
    text-align: left;
  }
  p {
    margin: 3px;
    padding-left: 10px;
    font-size: 14px;
    text-align: left;
    color: #7b7b7b;
  }
  > :nth-child(2) {
    max-width: 70%;
    text-align: right;
    > button {
      border: 2px solid #f07987;
      box-sizing: border-box;
      width: 120px;
      height: 40px;
      border-radius: 8px;
      background: white;
      color: #f07987;
    }
  }
`;
