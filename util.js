const nameInput = document.getElementById("name");
const selectTitle = document.getElementById("title");
const otherValue = document.querySelector('option[value = "other"]');
const form = document.querySelector("form");
const formChild = form.firstElementChild;
const newInput = document.createElement("input");

nameInput.focus();

function createInput(e) {
  if (e.selected == true) {
    newInput.setAttribute("id", "other-title");
    newInput.style.height = "1px";
    newInput.setAttribute("id", "other-title");
    newInput.setAttribute("placeholder", "Your Job Role");
    newInput.style.display = "inline-block";
    formChild.appendChild(newInput);
  } else if (e.selected == false) {
    newInput.style.display = "none";
  }
}
selectTitle.addEventListener("change", () => {
  createInput(otherValue);
});

// ”T-Shirt Info” section

const selectDesign = document.getElementById("design");
const selectColor = document.getElementById("color");
const allSelectDesignOptions = selectDesign.getElementsByTagName("option");
const firstSelectDesignOption = selectDesign.firstElementChild;
const secondSelectDesignOption = allSelectDesignOptions[1];
const thirdSelectDesignOption = allSelectDesignOptions[2];
const firstSelectColorOption = selectColor.firstElementChild;
const colorOptions = selectColor.querySelectorAll("option");
const shirtColors = document.querySelector("#shirt-colors");

function firstSelectionAction(firstSelect) {
  if (firstSelect.selected == true) {
    shirtColors.style.display = "none";
  }
}
firstSelectionAction(firstSelectDesignOption);

function selectDesignAction(firstSelection, secondSelection, thirdSelection) {
  selectDesign.addEventListener("change", () => {
    if (firstSelection.selected == true) {
      shirtColors.style.display = "none";
    } else if (secondSelection.selected == true) {
      shirtColors.style.display = "inline-block";
      for (let i = 0; i < colorOptions.length; i++) {
        colorOptions[i].style.display = "none";
      }
      for (let i = 0; i < 3; i++) {
        colorOptions[i].style.display = "inline";
      }
      colorOptions[0].selected = true;
    } else if (thirdSelection.selected == true) {
      shirtColors.style.display = "inline-block";
      for (let i = 0; i < colorOptions.length; i++) {
        colorOptions[i].style.display = "none";
      }
      for (let i = 3; i <= 5; i++) {
        colorOptions[i].style.display = "inline";
      }
      colorOptions[3].selected = true;
    }
  });
}

selectDesignAction(
  firstSelectDesignOption,
  secondSelectDesignOption,
  thirdSelectDesignOption
);

// ”Register for Activities” section

const activitiesParent = document.querySelector(".activities");
const allActivities = activitiesParent.querySelectorAll(
  "input[type='checkbox']"
);
const mainConference = allActivities[0];
const jsFrameWorks = allActivities[1];
const jsLibs = allActivities[2];
const express = allActivities[3];
const node = allActivities[4];
const buildTools = allActivities[5];
const npm = allActivities[6];

mainConference.required = true;

function alternativeCheckboxSelection(activity1, activity2) {
  activity1.addEventListener("change", () => {
    if (activity1.checked === true) {
      activity2.disabled = true;
    } else if (activity1.checked === false) {
      activity2.disabled = false;
    }
  });
  activity2.addEventListener("change", () => {
    if (activity2.checked === true) {
      activity1.disabled = true;
    } else if (activity2.checked === false) {
      activity1.disabled = false;
    }
  });
}

alternativeCheckboxSelection(jsLibs, node);
alternativeCheckboxSelection(jsFrameWorks, express);

const allLabels = activitiesParent.querySelectorAll("label");
const text = document.createElement("span");

function createPopUp(label, disabledCheckbox) {
  if (disabledCheckbox.disabled === true) {
    text.innerHTML = "Disabled";
    text.style.width = "120px";
    text.style.backgroundColor = "black";
    text.style.color = "#fff";
    text.style.textAlign = "center";
    text.style.borderRadius = "6px";
    text.style.padding = "5px 0";
    text.style.zIndex = "1";
    text.classList.add("createdSpan");
    label.appendChild(text);
    text.style.visibility = "visible";
  } else if (disabledCheckbox.disabled === false) {
    text.style.visibility = "hidden";
  }
}

for (let i = 0; i < allLabels.length; i++) {
  allLabels[i].addEventListener("mouseenter", () => {
    createPopUp(allLabels[i], allActivities[i]);
  });
}

function calculateTotal(activitiesArray) {
  const totalSpan = document.createElement("span");
  activitiesParent.appendChild(totalSpan);
  let sum = 0;
  for (let i = 0; i < activitiesArray.length; i++) {
    activitiesArray[i].addEventListener("change", () => {
      if (activitiesArray[i].checked === true) {
        sum = sum + +activitiesArray[i].getAttribute("data-cost");
      } else if (activitiesArray[i].checked === false) {
        sum = sum - +activitiesArray[i].getAttribute("data-cost");
      }
      totalSpan.innerHTML = `Total: $${sum}`;
      if (sum === 0) {
        totalSpan.innerHTML = "";
      }
    });
  }
}

calculateTotal(allActivities);

// "Payment Info" section

const paymentSelect = document.querySelector("#payment");
const creditCard = document.querySelector("option[value='credit card']");
const paypal = document.querySelector("option[value='paypal']");
const bitcoin = document.querySelector("option[value='bitcoin']");
const selectPaymentMethod = document.querySelector(
  "option[value='select method']"
);
const paypalParagraph = document.querySelector("#paypal");
const bitcoinParagraph = document.querySelector("#bitcoin");
const creditCardInformation = document.querySelector("#credit-card");

function setSelected(el) {
  el.setAttribute("selected", "selected");
}

setSelected(creditCard);

paymentSelect.required = true;

function paymentsSelection(
  payment1 /*creditcard*/,
  payment2 /*paypal*/,
  payment3,
  payment1Para,
  payment2Para /*bitcoin*/,
  payment3Info /*creditcard*/,
  otherPaymentMethod
) {
  payment1Para.style.display = "none";
  payment2Para.style.display = "none";
  payment3Info.style.display = "inline-block";
  paymentSelect.addEventListener("change", () => {
    if (payment1.selected == true) {
      payment3Info.style.display = "inline-block";
      payment1Para.style.display = "none";
      payment2Para.style.display = "none";
    } else if (payment2.selected == true) {
      payment3Info.style.display = "none";
      payment1Para.style.display = "inline-block";
      payment2Para.style.display = "none";
    } else if (payment3.selected == true) {
      payment3Info.style.display = "none";
      payment2Para.style.display = "inline-block";
      payment1Para.style.display = "none";
    } else if (otherPaymentMethod.selected == true) {
      payment3Info.style.display = "none";
      payment1Para.style.display = "none";
      payment2Para.style.display = "none";
    }
  });
}

paymentsSelection(
  creditCard,
  paypal,
  bitcoin,
  paypalParagraph,
  bitcoinParagraph,
  creditCardInformation,
  selectPaymentMethod
);

// Form validation messages

const emailEntered = document.querySelector("#mail");

function isValidEmail(email) {
  const eMailRegex = /^[^@]+@[^@.]+\.[a-z]+$/;
  return eMailRegex.test(email);
}

function validateEmail(el) {
  if (!isValidEmail(el.value)) {
    el.style.border = "1px solid red";
  } else if (isValidEmail(el.value)) {
    el.style.border = "2px solid rgb(111, 157, 220)";
  }
}

emailEntered.addEventListener("input", () => {
  validateEmail(emailEntered);
});

const nameEntered = document.querySelector("#name");

function isValidName(name) {
  const nameRegex = /^([A-Z][-,a-z. ']+[ ]*)+$/;
  return nameRegex.test(name);
}

function validateName(el) {
  if (!isValidName(el.value)) {
    el.style.border = "1px solid red";
  } else if (isValidName(el.value)) {
    el.style.border = "2px solid rgb(111, 157, 220)";
  }
}

nameEntered.addEventListener("input", () => {
  validateName(nameEntered);
});

// Conditional Error Message - submit the form without required values

const cardNumber = document.getElementById("cc-num");

function validateCreditCard(el) {
  if (el.value.length === 16) {
    el.style.border = "2px solid rgb(111, 157, 220)";
  } else {
    el.style.border = "1px solid red";
  }
}
cardNumber.addEventListener("input", () => {
  validateCreditCard(cardNumber);
});

// Submitting the form

const submitButton = document.querySelector('button[type="submit"]');

function checkedActivities(arrForActivities) {
  for (let i = 0; i < arrForActivities.length; i++) {
    if (arrForActivities[i].checked) {
      return true;
    } else {
      return false;
    }
  }
}

form.addEventListener("submit", (e) => {
  if (nameInput.value === "") {
    e.preventDefault();
  } else if (emailEntered.value === "") {
    e.preventDefault();
  } else if (checkedActivities(allActivities) == false) {
    e.preventDefault();
  } else if (selectPaymentMethod.selected == true) {
    e.preventDefault();
  }
});
