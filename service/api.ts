import axios from "axios";

const api = axios.create({
  baseURL: "", // Insere aqui o url da sua api
});

export async function getPercentage() {
  try {
    // Faz a request aqui
    // Awaits 500 ms
    await new Promise((resolve) => setTimeout(resolve, 500));

    const randomPlaceholderPercentage = Math.floor(Math.random() * 100);
    return {
      percentage: randomPlaceholderPercentage,
    };
  } catch (error) {}
}

export default api;
