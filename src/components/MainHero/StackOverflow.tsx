// StackOverflow.js

import "./StackOverflow.css";
import Stack from "../../assets/stack.png";

export const StackOverflow = () => {
  return (
    <div className="container">
      <h1 className="header">StackOverflow & Open Source Contributions</h1>
      <img src={Stack} className="stackImg" />
      <p className="text">
        Nowadays, with ChatGPT being a thing, sometimes you still get genuine
        answers from <span className="highlight">StackOverflow</span>. I used to
        contribute by answering there, and bagged a few reputation points,{" "}
        <span className="highlight">around 12k</span>, which I believe is
        hard-earned.
      </p>
      <span className="text">You can check my profile here: </span>

      <a
        href="https://stackoverflow.com/users/11355303/gaurav-roy"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        My StackOverflow Profile
      </a>
      <p className="text">
        Also, you can't contribute to Open Source unless you've actually
        deep-dived and worked on it.
      </p>
      <p className="text">
        Lucky for me, while working on a project, I encountered some glitchy
        behavior in React Native. After checking their source code, I realized
        they had indeed missed an edge case.
      </p>
      <p className="text">
        So, I contributed to their codebase and got my first PR merged in React
        Native!
      </p>
      <p className="text">
        Check it out here:
        <a
          href="https://github.com/facebook/react-native/pull/36009"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          My First React Native PR
        </a>
      </p>
    </div>
  );
};
