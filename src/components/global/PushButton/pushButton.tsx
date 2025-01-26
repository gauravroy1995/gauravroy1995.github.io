import "./PushButton.css";
export const PushButton = (props) => {
  const onClick = props.onClick || (() => {});
  const text = props.text || "push";

  return (
    <body>
      <a onClick={onClick}>
        {text}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </body>
  );
};
