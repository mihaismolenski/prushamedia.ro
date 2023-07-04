import "./textarea.scss";

export interface TextareaProps {
  elementId: string;
  registerFunc: Function;
  placeholder?: string;
  requiredMessage?: string;
  errorMessage?: string;
}

export const Textarea = ({
  elementId,
  registerFunc,
  placeholder,
  requiredMessage,
  errorMessage,
}: TextareaProps) => {
  return (
    <div className="textarea">
      <textarea
        id={elementId}
        {...registerFunc(elementId, {
          required: requiredMessage,
        })}
        name={elementId}
        type="text"
        className={errorMessage ? "error" : ""}
        placeholder={placeholder}
        maxLength="10000"
      />
      <div className="error-message">{errorMessage}</div>
    </div>
  );
};

export default Textarea;
