const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea")
  const results = resultEl.innerText

  textarea.value = results
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  textarea.remove()

});

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const valupper = uppercaseEl.checked;
  const valLower = lowercaseEl.checked;
  const valnumber = numbersEl.checked;
  const valsymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    valupper,
    valLower,
    valnumber,
    valsymbol,
    length
  );
});

function generatePassword(upper, lower, number, symbol, length){
  let passwordGenerate = "";

  const count = upper + lower + number + symbol;
  // console.log(count)

  const typeArr = [{ upper }, { lower },  { number }, { symbol }].filter(item=>Object.values(item))
  // console.log(typeArr);

  if (count === 0) {
    return "";
  }

  for (let i = 0; i < length; i += count) {
    typeArr.forEach(type => {
      // console.log(type);
      const funName = Object.keys(type)[0];
        // console.log(funName);
      passwordGenerate += randomFunc[funName]();
    });
  }
  const completepass = passwordGenerate.slice(0,length);
  console.log(completepass)
  return completepass

}

function getRandomLower() {
  const randomLower = "abcdefghijklmnopqrstuvwxyz";
  return randomLower[Math.floor(Math.random() * randomLower.length)];
  // return String.fromCharCode(Math.floor(Math.random() * 26) + 97)

}

function getRandomUpper() {
  const randomUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return randomUpper[Math.floor(Math.random() * randomUpper.length)];
  // return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  const num = "0123456789";
  return num[Math.floor(Math.random() * num.length)];
  // return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48 )
}

function getRandomSymbol() {
  const randomSymbol = "!@#$%^&*+=/";
  return randomSymbol[Math.floor(Math.random() * randomSymbol.length)];
  // return String.fromCharCode(Math.floor(Math.random() * 7) * 33 )
}

// console.log(getRandomSymbol());
