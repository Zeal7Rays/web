document.addEventListener("DOMContentLoaded", () => {

    const langBtn = document.querySelector(".lang-switch");

    if (!langBtn) return;

    langBtn.addEventListener("click", () => {

        alert("Language switch will be available in V1.1");

    });

});