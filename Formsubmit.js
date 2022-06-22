const scriptURL =
    "https://script.google.com/macros/s/AKfycbyog2a4WffJAeYHNXpLmuY16WJUvgdpvwilejUz2XW0FPitiAwK35FZT_kPg-qL7hokZg/exec";
const form = document.forms["portfolio-Contact-Form"];
const btnSubmit = document.querySelector(".btn-submit");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // ketika tombol submit diklik
    // tampilkan tombol loading, hilangkan tombol submit
    btnLoading.classList.toggle("d-none");
    btnSubmit.classList.toggle("d-none");
    fetch(scriptURL, {
            method: "POST",
            body: new FormData(form)
        })
        .then((response) => {
            // tampilkan tombol submit, hilangkan tombol loading
            btnLoading.classList.toggle("d-none");
            btnSubmit.classList.toggle("d-none");
            // tampilkan alert
            myAlert.classList.toggle("d-none");
            // reset form
            form.reset();
            console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
});