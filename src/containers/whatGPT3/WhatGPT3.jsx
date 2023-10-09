import React from "react";
import "./whatGPT3.css";
import { Features } from "../../components/index";

export const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Features
          title="What is gpt3"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dicta quo obcaecati aliquid eveniet dolorum labore tempore non alias laborum."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Features
          title="Chatbot"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur doloremque aut modi veniam blanditiis, sint mollitia cupiditate a dignissimos, eum minus quo! Molestias, non!"
        />
        <Features
          title="Knowledge base"
          text="ipsum dolor sit amet consectetur, adipisicing elit. Culpa, deleniti earum ipsam iure voluptate animi nemo laudantium modi officia, sunt harum aut quae veritatis facere optio. Dolor, nemo! Sit, odio."
        />
        <Features
          title="Education"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt veritatis labore, fugit hic minima dolorum."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
