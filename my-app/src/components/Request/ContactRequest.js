const contactRequest = (body) => {
    fetch('http://localhost:4000', {
      method: "POST",
      mode: "no-cors",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(body)})
      .then(res => res.json())
      .catch((e) => console.error(e));
};

export default contactRequest;
