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
    const result = [];
    let i = 0;
    while (result.length < num && i < arr.length) {
      if (arr[i].toLowerCase().includes(name)) {
        result.push(arr[i]);
      }
      i++;
    }
    console.log(result);
  }
  
  searchName("an", 3, logSearch);
  