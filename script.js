const inputs = document.querySelectorAll(".code");

window.addEventListener("load", () => {
  inputs[0].focus();
});

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    if (value.length > 1) {
      input.value = value.charAt(0); // Keep only first character
    }

    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "") {
        if (index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = "";
        }
      } else {
        input.value = "";
      }
    } else if (e.key.length === 1 && !e.key.match(/[0-9]/)) {
      e.preventDefault(); // Only allow numeric input
    }
  });
});
