import React, { useEffect } from "react";
import axios from "axios"; //npm install axios

function GitHub() {
  useEffect(() => {
    axios.get("https://api.github.com/search/users?q=jonathan").then((res) => {
      console.log(res.data.items);
    });
  }, []);

  return <div></div>;
}
export default GitHub;
