document.getElementById("form").addEventListener("submit", function (e) {
    const email = this.recipient.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        e.preventDefault();
        alert("Enter a valid email");
        this.recipient.value = ''
        this.recipient.classList.add("error");
        return;
    }
this.submit();
});