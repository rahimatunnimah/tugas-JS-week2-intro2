//10 method javascript 

//1. filter()
// filter() adalah sebuah method javascript yang memfilter array berdasarkan logika yang diberikan
// dan mengembalikan array baru yang berisi item yang memenuhi aturan tersebut.
const weeklyReadings = [20, 10, 20.5, 19, 21, 21.5, 23];

const colderDays = weeklyReadings.filter(dayTemperature => {
    return dayTemperature < 20;
});

console.log("Total colder days in week were: " + colderDays)

//2. push()
// push() adalah sebuah method javascript yang bisa menambahkan elemen baru ke akhir array.
const number = [1,2,3,4,5,6];
number.push(8,9);
console.log(number);

//3. sort()
// sort() adalah sebuah method javascript 