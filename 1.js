//10 method javascript 

/*1. filter()
     filter() adalah sebuah method javascript yang memfilter array berdasarkan logika yang diberikan
     dan mengembalikan array baru yang berisi item yang memenuhi aturan tersebut.
*/

const weeklyReadings = [20, 10, 20.5, 19, 21, 21.5, 23];
const colderDays = weeklyReadings.filter(dayTemperature => {
    return dayTemperature < 21;
})
console.log("Total colder days in week were: " + colderDays);

/*2. push()
push() adalah sebuah method javascript yang bisa menambahkan elemen baru ke akhir array.
saat push() digunakan bersamaan dengan spread operator, hal itu bisa menggabungkan antara beberapa array bersama.
*/

const number = [1,2,3,4,5,6];
number.push(8,9);
console.log(number);
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8]
array1.push(...array2);
console.log(array1)

/*3. sort()
     sort() adalah sebuah method javascript yang mengurutkan elemen array berdasarkan urutan naik secara alami
*/
const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(day.sort());

/*4. includes()
     includes() adalah sebuah metode javascript yang menentukan apakah suatu string dapat ditemukan dalam string lain.
     Jika iya, maka ia akan mengembalikan nilai true
     Jika tidak, maka ia mengembalikan false
     metode ini juga sensitifterhadap huruf besar dan kecil
*/
const text = "Hello, my name is Rahimatun Ni'mah";
console.log(text.includes("Ni'mah"));
console.log(text.includes("name",14));

/*5. fill()
     fill() adalah sebuah method javascript yang mengisi elemen tertentu dalam array dengan nilai yang diberikan.
     Metode fill() menimpa array asli.
     Posisi awal dan akhir dapat ditentukan. Jika tidak, semua elemen akan terisi.
*/

const fruits = ["Watermelon", "Grape", "Apple", "Mango"];
// console.log(fruits.fill("orange"))
console.log(fruits.fill("orange",2))

/*6. parseFloat()
      parseFloat() digunakan untuk menerima string dan mengembalikan angka pertama.
      Jika string tidak berisi nilai numerik atau karakter pertama dari string bukan Angka maka ia mengembalikan NaN
      spasi awal dan akhir diabaikan.
*/

const float1 = parseFloat("10.00");
const float2 = parseFloat(" 20 ");
const float3 = parseFloat("20 years");
const float4 = parseFloat("30H")
const float5 = parseFloat("H40"); 

console.log(float1)
console.log(float2)
console.log(float3)
console.log(float4)
console.log(float5)

/*7. toLowerCase()
     toLowerCase() adalah salah satu method javascript untuk mengubah string menjadi huruf kecil.
     Metode toLowerCase() ini tidak mengubah string asli.
*/

const kata = "Hallo namaku Ni'mah"
const rubahKata = kata.toLocaleLowerCase()
console.log(rubahKata)

/*8. toTimeString()
     toTimeString() adalah metode javascript yang mengembalikan bagian waktu dari objek tanggal sebagai string.
*/
const time = new Date();
let textTime = time.toTimeString();
console.log(textTime)


/*9. splice()
     Metode splice() dari javascript ini bisa menambahkan dan/atau menghapus elemen array.
     Metode ini menimpa array asli.
*/
const vegetables = ["mushroom", "carrot", "cabbage", "potato"];
const add = vegetables.splice(2, 0, "spinach", "lettuce") //menamabah 2 elemen pada index ke 2
const remove = vegetables.splice(1, 1)//menghapus 1 elemen pada index ke 1
console.log(vegetables);

/*10. shift()
      Metode shift() ini untuk menghapus elemen pertama dari sebuah array.
      Metode ini mengubah array asli.
      Metode ini mengembalikan elemen yang digeser.
*/
const colors = ["white", "black", "grey", "blue","green","pink"]
const remainingColor = colors.shift()
console.log(colors)


