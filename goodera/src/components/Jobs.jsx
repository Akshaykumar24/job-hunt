import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { url } from "../utils/url";
import Small from "./Small";

const Jobs = () => {
  const [search, setSeacrh] = useState("");
  const [selected, setSelected] = useState("");
  const [jobs, setjobs] = useState([]);

  useEffect(() => {
    axios.get(`${url}/job`).then(({ data }) => setjobs(data.jobs));
  });

  return (
    <>
      <Search>
        <div>
          <input type="text" placeholder="Job Title or Keyword" />
        </div>
        <div>
          <select name="" id="">
            <option value="default">Select Location</option>
          </select>
        </div>
        <div>
          <button>Search</button>
        </div>
      </Search>
      <Container>
        {jobs.map((p, i) => (
          <Small key={i} p={p} />
        ))}
      </Container>
    </>
  );
};

export default Jobs;
const Search = styled.div`
  background-color: white;
  width: 80%;
  padding: 15px;
  margin: -50px auto;
  height: 50px;
  position: relative;
  z-index: 1px;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 2px 12px 8px 2px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  > div {
    flex: 1;

    > select {
      height: 100%;
      width: 90%;
      color: #7b7b7b;
      font-size: 16px;
      border: none;
    }
    > input {
      height: 80%;
      width: 80%;
      font-size: 16px;
      padding: 5px 0 15px;
      border: none;
      outline: none;
    }
    > button {
      height: 100%;
      width: 70%;
      background: #f07987;
      border-radius: 8px;
      border: none;
      color: white;
      font-size: 24px;
    }
  }
`;

const Container = styled.div`
  padding: 4% 10%;
  display: flex;
  background-color: #eaeaea;
  flex-wrap: wrap;
`;
