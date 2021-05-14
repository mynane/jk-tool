export const get = (url, options) => {
  return fetch(`${url}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    ...options,
  }).then((res) => res.json());
};
