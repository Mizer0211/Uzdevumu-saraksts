const POP_UP = document.getElementById('PopUp');
let uzdevumi = [];

window.addEventListener('load', () => {
    uzdevumi = JSON.parse(localStorage.getItem("uzdevumi") || "[]");
    console.log(uzdevumi)
    render();
});

