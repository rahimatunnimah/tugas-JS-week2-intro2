function seleksiNilai(nilaiAwal,nilaiAkhir,dataArray){
    dataArray.sort(function(a,b) {
        return a-b;
    });
    if (typeof nilaiAwal != "number"|| typeof nilaiAkhir != "number"){
        console.log("Nilai yang dimasukkan harus berupa angka!");
        return;
    }
    if (nilaiAwal > nilaiAkhir){
        console.log ("Nilai akhir harus lebih besar dari nilai awal");
    } else if (dataArray.length < 5){
        console.log ("Jumlah angka dalam dataArray harus lebih dari 5");
    } else {
        const result = dataArray.filter(nilaiArray => {
            return nilaiArray > nilaiAwal && nilaiArray < nilaiAkhir
        });
        if (result.length == 0){
            console.log("Nilai tidak ditemukan");
        } else {
            console.log(result);
        }  
    }
}

seleksiNilai("a", 20 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(5, "b" , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(5, 17 , [2, 25, 4])
seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
