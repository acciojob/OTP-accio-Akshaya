//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) =>{
	input.addEventListener("input",(e) => {
		const value = e.target.value;
	})
})
