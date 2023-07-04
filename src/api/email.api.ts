import { SendMessageFormData } from "../components";

const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_PRODUCTION_URL
    : process.env.REACT_APP_API_URL;

export const sendEmail = (data: SendMessageFormData): Promise<string> => {
  return fetch(`${apiUrl}/sendEmail`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data);
};

