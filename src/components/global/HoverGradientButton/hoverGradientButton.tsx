import "./hover.css";

type P = {
  text: string;
  onClick: () => void;
};

export const HoverGradientButton = (props: P) => {
  const text = props.text || "HOVER ME, THEN CLICK ME!";
  const onClick = props.onClick || (() => {});

  return (
    <button onClick={onClick} className="glow-on-hover" type="button">
      {text}
    </button>
  );
};
