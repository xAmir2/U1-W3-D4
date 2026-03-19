const numPool = [];
console.log(numPool);
const numPoolPicked = [];
console.log(numPoolPicked);
const bingoCells = () => {
  const layout = document.getElementById("layout");

  for (let i = 1; i < 77; i++) {
    const numCell = document.createElement("div");
    numCell.classList.add("divcell");
    const numCellValue = document.createElement("h3");
    numCellValue.innerText = i;
    numPool.push(numCellValue);
    numCell.appendChild(numCellValue);
    layout.appendChild(numCell);
  }
};
bingoCells();

console.log(numPool);
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
const numberGen = () => {
  const button = document.getElementById("numGen");

  button.addEventListener("click", () => {
    if (numPool.length === 0) return;

    const numRandom = Math.floor(Math.random() * numPool.length);

    const pickedElement = numPool[numRandom];
    numPool.splice(numRandom, 1);

    console.log(numPool.length);

    pickedElement.classList.add("colorcell");
  });
};

numberGen();
