import { useForm } from "react-hook-form";
import Input, { EMAIL_VALIDATION_PATTERN } from "../input/input";
import "./contact.scss";
import Textarea from "../textarea/textarea";
import Button from "../button/button";
import { sendEmail } from "../../api/email.api";

export interface SendMessageFormData {
  name: "",
  email: "",
  phone: "",
  message: "",
}

export const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isLoading },
  } = useForm<SendMessageFormData>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: SendMessageFormData) => {
    sendEmail(data)
    .then(() => {})
    .finally(() => {
      reset({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    });
  };

  return (
    <div className="contact">
      <div className="contact-content">
        <h2 className="contact-content-title" id="contact">
          Contact
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="contact-form"
        >
          <Input
            registerFunc={register}
            elementId="name"
            placeholder="Name*"
            requiredMessage="Please fill in a name."
            errorMessage={errors.name?.message}
          />
          <Input
            registerFunc={register}
            elementId="email"
            placeholder="Email*"
            requiredMessage="Please fill in an email address."
            errorMessage={errors.email?.message}
            regex={EMAIL_VALIDATION_PATTERN}
            regexError="Please fill a valid email address."
          />
          <Input
            registerFunc={register}
            elementId="phone"
            placeholder="Phone*"
            requiredMessage="Please fill in a phone number."
            errorMessage={errors.phone?.message}
          />
          <Textarea
            registerFunc={register}
            elementId="message"
            placeholder="Message*"
            requiredMessage="Please fill in a message."
            errorMessage={errors.message?.message}
          />
          <Button text={isLoading ? 'Sending' : 'Send Message'} type="submit" disabled={isLoading} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
