const body = document.querySelector("body")
const day = document.querySelector("#day")
const night = document.querySelector("#night")
const icon = document.querySelector(".icons")

day.addEventListener("click", () => {
    body.className = "dayTime";
    icon.innerHTML = `<i class="fas fa-sun"><i/>`
});

night.addEventListener("click", () => {
    body.className = "nightTime";
    icon.innerHTML = `<i class="fas fa-moon"><i/>`
});