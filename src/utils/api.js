const baseUrl = "http://localhost:3001";
const headers = {
  "Content-Type": "application/json",
};

const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const getItems = () => {
  return fetch(`${baseUrl}/items`, {
    headers: headers,
  }).then(handleServerResponse);
};

export { getItems };
