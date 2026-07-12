import axios from "axios";

const API = axios.create({
  baseURL: "https://student-support-chatbot-1-41jf.onrender.com",
});

export const sendMessage = async (message) => {
  const response = await API.post("/chat", {
    message,
  });

  return response.data.response;
};