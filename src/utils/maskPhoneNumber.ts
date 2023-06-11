export const maskPhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
  let value = event.target.value;
  let inputNumValue = value.replace(/\D/g, "");
  let formattedInputValue = "";
  const selectionStart = event.target.selectionStart;
  if (!inputNumValue) {
    return (event.target.value = "");
  }
  if (value.length !== selectionStart) {
    return;
  }
  if (["7", "8", "9"].indexOf(inputNumValue[0]) > -1) {
    //Russian phone number
    if (inputNumValue[0] === "9") {
      inputNumValue = "7" + inputNumValue;
    }
    const firstSymbol = inputNumValue[0] === "8" ? "+7" : "+7";
    formattedInputValue = firstSymbol + " ";

    if (inputNumValue.length > 1) {
      formattedInputValue += "(" + inputNumValue.substring(1, 4);
    }
    if (inputNumValue.length >= 5) {
      formattedInputValue += ") " + inputNumValue.substring(4, 7);
    }
    if (inputNumValue.length >= 8) {
      formattedInputValue += "-" + inputNumValue.substring(7, 9);
    }
    if (inputNumValue.length >= 10) {
      formattedInputValue += "-" + inputNumValue.substring(9, 11);
    }
  } else {
    // Not Russian phone number
    formattedInputValue = "+" + inputNumValue.substring(0, 16);
  }
  event.target.value = formattedInputValue;
};
