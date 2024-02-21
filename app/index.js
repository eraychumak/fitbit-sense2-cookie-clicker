/*
 * Entry point for the watch app
 */
import * as document from "document";

const cookie = document.getElementById("cookie");
const num = document.getElementById("num");

cookie.addEventListener("click", (evt) => {
  cookie.animate("click");
  const current = parseInt(num.text);
  num.text = current + 1;
});