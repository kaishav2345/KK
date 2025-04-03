function Login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Please enter username and password.";
        return;
    }

    window.location.href = "login_dashboard.html";
}
