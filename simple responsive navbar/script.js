const sbMenu = document.querySelector('.menu')
const sbClose = document.querySelector('.close')
const sidebar = document.querySelector('.sidebar')

sbMenu.addEventListener("click", () => {
    sidebar.classList.add("active");
});

sbClose.addEventListener("click", () => {
    sidebar.classList.remove("active");
});
