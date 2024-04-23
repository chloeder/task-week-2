const toggleMenu = () => {
  const ul = document.querySelector("ul");

  if (ul.style.display === "block") {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }
};
