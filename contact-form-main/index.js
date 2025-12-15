// Text inputs
const first = document.getElementById("first");
const firstError = first.nextElementSibling;

const last = document.getElementById("last");
const lastError = last.nextElementSibling;

const email = document.getElementById("email");
const emailError = email.nextElementSibling;

const message = document.getElementById("message");
const messageError = message.nextElementSibling;

// Radio + checkbox
const queryError = document.getElementById("queryError");
const consent = document.getElementById("consent");
const consentError = document.getElementById("consentEl");


// ===== ELEMENTS (TOP OF FILE) =====
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
    e.preventDefault(); // 🔥 ALWAYS prevent default

    let valid = true;

    // Text fields
    valid = validateForm(first, firstError) && valid;
    valid = validateForm(last, lastError) && valid;
    valid = validateForm(email, emailError) && valid;
    valid = validateForm(message, messageError) && valid;

    // Radio buttons
    const radios = document.querySelectorAll('input[name="topic"]');
    const boxes = document.querySelectorAll(".box");
    const oneChecked = [...radios].some(radio => radio.checked);


    if (!oneChecked) {
        queryError.classList.add("active");
        boxes.forEach(box => box.classList.add("error-border"));
        valid = false;
    } else {
        queryError.classList.remove("active");
        boxes.forEach(box => box.classList.remove("error-border"));
    }

    // Consent checkbox
    if (!consent.checked) {
        consentError.classList.add("active");
        valid = false;
    } else {
        consentError.classList.remove("active");
    }

    // Final decision
    if (!valid) {
        console.log("FORM BLOCKED");
        return;
    }

    console.log("FORM SUBMITTED");
    showSuccessMessage();
    form.reset();
});

function validateForm(input, errorMsg) {
    console.log("Validating:", input.id, input.checkValidity());
    if (!input.checkValidity()) {
        errorMsg.classList.add("active");
        input.classList.add("error-border");
        return false;
    } else {
        errorMsg.classList.remove("active");
        input.classList.remove("error-border");
        return true
    }
}

function showSuccessMessage() {
    const success = document.getElementById("successMessage");
    success.classList.remove("hidden");
    setTimeout(() => {
        success.classList.add("hidden");
    }, 3000);
};