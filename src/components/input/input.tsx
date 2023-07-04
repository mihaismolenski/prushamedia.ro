import "./input.scss";

export const EMAIL_VALIDATION_PATTERN =
  /^\w+([+.-]?\w+)@\w+([.-]\w+)*(\.\w{2,12})+$/;
export const ANY_VALIDATION_PATTERN = /[\\s\\S]*/;

export interface InputProps {
  elementId: string;
  registerFunc: Function;
  placeholder?: string;
  requiredMessage?: string;
  errorMessage?: string;
  regex?: RegExp;
  regexError?: string;
}

export const Input = ({
  elementId,
  registerFunc,
  placeholder,
  requiredMessage,
  errorMessage,
  regex = ANY_VALIDATION_PATTERN,
  regexError = "",
}: InputProps) => {
  return (
    <div className="input">
      <input
        id={elementId}
        {...registerFunc(elementId, {
          required: requiredMessage,
          pattern: {
            value: regex,
            message: regexError,
          },
        })}
        name={elementId}
        type="text"
        className={errorMessage ? "error" : ""}
        placeholder={placeholder}
      />
      <div className="error-message">{errorMessage}</div>
    </div>
  );
};

export default Input;
