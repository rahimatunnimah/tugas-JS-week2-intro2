function valueSelection(firstVaule, lastValue, dataArray) {
  dataArray.sort(function (a, b) {
    return a - b;
  });
  if (typeof firstVaule != "number" || typeof lastValue != "number") {
    console.log("input value must be number!");
    return;
  }
  if (firstVaule > lastValue) {
    console.log("last value must be more than first value");
  } else if (dataArray.length < 5) {
    console.log("number of digit in dataArray must be more than 5");
  } else {
    const result = dataArray.filter((nilaiArray) => {
      return nilaiArray > firstVaule && nilaiArray < lastValue;
    });
    if (result.length == 0) {
      console.log("value not found");
    } else {
      console.log(result);
    }
  }
}

valueSelection("2", 20, [2, 25, 4, 14, 17, 30, 8]);
valueSelection(5, "b", [2, 25, 4, 14, 17, 30, 8]);
valueSelection(5, 20, [2, 25, 4, 14, 17, 30, "8"]);
valueSelection(15, 3, [2, 25, 4, 14, 17, 30, 8]);
valueSelection(5, 17, [2, 25, 4]);
valueSelection(5, 17, [2, 25, 4, 1, 30, 18]);
