function seleksiNilai(nilaiAwal,nilaiAkhir,dataArray){
    dataArray.sort();
    const result = dataArray.filter(nilaiArray => {
        return nilaiArray > nilaiAwal && nilaiArray < nilaiAkhir
    });
   
    if (nilaiAwal > nilaiAkhir){
        return "Nilai akhir harus lebih besar dari nilai awal";
    } else if (dataArray.length < 5){
        return "Jumlah angka dalam dataArray harus lebih dari 5";
    } else {
        console.log(result);
    }
};

seleksiNilai(5,20,[2,25,4,14,17,30,8])