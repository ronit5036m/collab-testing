const paragraph_1 = document.querySelector(".paragraph_1");
const body = document.body;

const addcolor = (e) => {
  e.stopPropagation();
  paragraph_1.style.color = "white";
  paragraph_1.style.backgroundColor = "rgb(135, 43, 255)";
};

paragraph_1.addEventListener("click", addcolor);
