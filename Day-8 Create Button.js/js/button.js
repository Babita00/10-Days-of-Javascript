let button = document.querySelector("#btn");
let count = 0;
const update = () => {
    count++;
    button.innerHTML = count;
}
button.addEventListener("click", update);