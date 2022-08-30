function searchName(name, num, callback) {
  const arr = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
  ];
  callback(name, num, arr);
}

function logSearch(name, num, arr) {
  arr.sort();
  if (typeof name != "string") {
    console.log("parameter name must be string");
    return;
  }
  if (typeof num != "number") {
    console.log("parameter num must be number");
    return;
  }
  if (num < 0) {
    console.log("parameter num cannot be negative");
    return;
  }

  const result = [];
  let i = 0;
  while (result.length < num && i < arr.length) {
    if (arr[i].toLowerCase().includes(name)) {
      result.push(arr[i]);
    }
    i++;
  }

  if (result.length == 0) {
    console.log("result not found");
  } else {
    console.log(result);
  }
}

searchName("ABI", 3, logSearch);
