//your JS code here. If required.
let count=0
function SubmitBtn() {
	let counter = document.getElementById("counter");
	alert(count);
	count++;
	counter.textContent = `${count+1}`
}
