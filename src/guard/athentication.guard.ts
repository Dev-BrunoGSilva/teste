import axios from "axios";

let headersList = {
 "Authorization": "Token",
 "Content-Type": "application/json" 
}

let bodyContent = JSON.stringify({
  "email": "lorenatorres16@hotmail.com",
  "senha": "518212aced"
});

let reqOptions = {
  url: "https://app.sistemasircon.com.br/api/cliente/autenticar",
  method: "POST",
  headers: headersList,
  data: bodyContent,
}

export const response = async () => await axios.request(reqOptions);