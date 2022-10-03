const app = document.querySelector("html")

const buttons = document.querySelectorAll("#darkMode")
buttons.forEach(button => button.addEventListener("click", () => {
    app.classList.toggle("dark")
}))