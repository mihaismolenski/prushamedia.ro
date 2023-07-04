import "./button.scss";

export interface ButtonProps {
  text: string;
  type: "button" | "submit";
  disabled: boolean;
}

export const Button = ({ text, type, disabled }: ButtonProps) => {
  return (
    <button className="button" type={type} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
