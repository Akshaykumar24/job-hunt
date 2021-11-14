import React from "react";
import styled from "styled-components";

const Jobs = () => {
  return (
    <Search>
      <div>
        <svg
          width="1174"
          height="122"
          viewBox="0 0 1174 122"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1_5)">
            <rect x="8" width="1154" height="100" rx="24" fill="white" />
          </g>
          <defs>
            <filter
              id="filter0_d_1_5"
              x="0"
              y="0"
              width="1174"
              height="122"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_1_5"
              />
              <feOffset dx="2" dy="12" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_5"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_5"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <input type="text" />
      </div>
      <div>
        <svg
          width="1174"
          height="122"
          viewBox="0 0 1174 122"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1_5)">
            <rect x="8" width="1154" height="100" rx="24" fill="white" />
          </g>
          <defs>
            <filter
              id="filter0_d_1_5"
              x="0"
              y="0"
              width="1174"
              height="122"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_1_5"
              />
              <feOffset dx="2" dy="12" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_5"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_5"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <select name="" id=""></select>
      </div>
      <button></button>
    </Search>
  );
};

export default Jobs;
const Search = styled.div`
  background-color: white;
  width: 80%;
  margin: -50px auto;
  height: 80px;
  position: relative;
  z-index: 1px;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 2px 12px 8px 2px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
`;
