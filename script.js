let count = 0;

function SubmitBtn() {
    alert(count);
    count++;
    document.getElementById("counter").textContent = count;
}

document.getElementById("incrementBtn").addEventListener("click", SubmitBtn);
