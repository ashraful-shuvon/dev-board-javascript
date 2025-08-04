function getInnerText(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseInt(value);
  return convertedValue;
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
