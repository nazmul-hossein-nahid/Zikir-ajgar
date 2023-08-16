function counterZikir(inputId) {
  const subhanallah = document.getElementById(inputId);
  const subhanallahValue = parseFloat(subhanallah.innerText);

  if (subhanallah.innerText === "33") {
    subhanallah.innerHTML = 0;
    return;
  }
  subhanallah.innerText = subhanallahValue + 1;
}

function reset(inputId) {
  const subhanallah1 = document.getElementById(inputId);
  subhanallah1.innerText = 0;
}
