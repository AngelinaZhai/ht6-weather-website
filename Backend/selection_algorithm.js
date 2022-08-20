import fetch from "node-fetch"

fetch("accessories.json")
  .then(response => response.json())
  .then(json => console.log(json));
