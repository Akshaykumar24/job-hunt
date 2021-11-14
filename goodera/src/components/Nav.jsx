import React from "react";
import styled from "styled-components";
const Nav = () => {
  return (
    <>
      <Outer>
        <Navigate>
          <div>
            <Bars>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12.255C16.1405 13.4112 13.0844 14.0038 10 14C6.817 14 3.78 13.38 1 12.255H19ZM14 5V3C14 2.46957 13.7893 1.96086 13.4142 1.58579C13.0391 1.21071 12.5304 1 12 1H8C7.46957 1 6.96086 1.21071 6.58579 1.58579C6.21071 1.96086 6 2.46957 6 3V5H14ZM10 11H10.01H10ZM3 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H3C2.46957 5 1.96086 5.21071 1.58579 5.58579C1.21071 5.96086 1 6.46957 1 7V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Job Hunt</span>
            </Bars>
            <Bars>Find Jobs</Bars>
            <Bars>Upskill Yourself</Bars>
          </div>
          <div>
            <Bars>Post a Job</Bars>
            <Bars>Sign in</Bars>
          </div>
        </Navigate>
        <Heads>
          <h1>Find Your Dream Job</h1>
          <p>
            Browse through thousands of full-time or part-time jobs near you
          </p>
        </Heads>
      </Outer>
    </>
  );
};

export default Nav;

const Navigate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > div {
    display: flex;
  }
`;

const Outer = styled.header`
  display: flex;
  position: sticky;
  flex-direction: column;
  width: 80%;
  padding: 52px 10%;
  height: 260px;
  left: 0px;
  top: 0px;
  background: linear-gradient(274.83deg, #5db0df 0.58%, #5d7adf 74.3%);
`;

const Bars = styled.div`
  color: white;
  font-size: 18px;
  /* display: flex; */
  padding: 5px 25px;
  > span {
    padding: 0 10px;
  }
  ::after {
    content: "";
    width: 50px;
    height: 5px;
    position: relative;
    bottom: -100%;
    left: -50%;
    background-color: white;
    border-radius: 2.5px;
  }
`;
const Heads = styled.div`
  color: white;
  text-align: left;
  padding: 30px 15px;
  > h1 {
    font-weight: bold;
    font-size: 48px;
    line-height: 72px;
    margin-bottom: 0px;
  }
  > p {
    font-size: 20px;
    line-height: 30px;
    margin-top: 0px;
  }
`;
