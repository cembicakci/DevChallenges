const customNumberInputs = Array.from(document.querySelectorAll(".custom-number-input"));
const customNumberMinuses = Array.from(document.querySelectorAll(".custom-number-input__minus"));
const customNumberPluses = Array.from(document.querySelectorAll(".custom-number-input__plus"));
const customNumberInputsNumber = Array.from(document.querySelectorAll(".custom-number-input__number"));
const contactForm = document.querySelector("#contact-form");

const enableChangingQuantity = () => {
    customNumberMinuses.forEach((customNumberMinus, index) => {
        const el = customNumberInputsNumber[index];
        const customNumberPlus = customNumberPluses[index];
        
        customNumberMinus.addEventListener("click", (e) => {
            el.textContent = parseInt(el.textContent) - 1
        })
        customNumberPlus.addEventListener("click", (e) => {
            el.textContent = parseInt(el.textContent) + 1
        })
    })
}


const initialize = () => {
    enableChangingQuantity();
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("All required fields are filled");
    })
}

initialize();