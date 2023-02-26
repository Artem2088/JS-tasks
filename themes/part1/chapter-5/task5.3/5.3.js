// 5.3.1
function ucFirst(str) {
  if (!str) return str;
  let res = str[0].toUpperCase() + str.slice(1);
  return res;
}

// 5.3.2
function checkSpam(str) {
  if (!str) return str;
  let res;
  res = str.toLowerCase();
  if (res.includes("viagra") || res.includes("xxx")) {
    return alert("true");
  }
  return alert("false");
}

// 5.3.3
function truncate(str, maxlength) {
  if (!str) return str;

  if (str.length > maxlength) {
    let newStr = str.slice(0, maxlength - 1);
    return newStr + "…";
  } else {
    return str;
  }
}

// 5.3.4
function extractCurrencyValue(str) {
  let res;
  res = +str.slice(1);
  return res;
}
