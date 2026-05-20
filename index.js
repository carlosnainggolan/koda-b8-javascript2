function hitungStatistik(data) {
    if (!Array.isArray(data)) {
        console.log("Error: Input harus berupa Array!");
        return;
    }

    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] !== "number") {
            console.log(`Error: Elemen pada indeks ke-${i} (${data[i]}) bukan angka!`);
            return; 
        }
    }

    let max = data[0];
    let min = data[0];
    let avg = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i] > max) {
            max = data[i];
        }
        if (min > data[i]) {
            min = data[i];
        }
        avg += data[i];
    }
    avg /= data.length;

    console.log(`Nilai Avg:  ${avg}`);
    console.log(`Nilai Min: ${min}`);
    console.log(`Nilai Max: ${max}`);
}

hitungStatistik([2, "empat", 6, 8]);