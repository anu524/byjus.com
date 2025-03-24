import React, { useEffect, useState } from "react";
import axios from "axios";

const Server = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get(localhost:5173/")
      .then(response => setData(response.data))
      .catch(error => console.error("Error:", error));
  }, []);

  return <h1>{data}</h1>;
};

export default Server;
