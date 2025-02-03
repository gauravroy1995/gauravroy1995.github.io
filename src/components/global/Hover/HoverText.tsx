import "./hoverText.css";

type P = {
  text: string;
  onClick: () => void;
  addClasses?: string;
};

export const HoverText = (props: P) => {
  const { text = "", onClick, addClasses = "" } = props || {};

  return (
    <div onClick={onClick} className={`hover-underline ${addClasses}`}>
      {text}
    </div>
  );
};
