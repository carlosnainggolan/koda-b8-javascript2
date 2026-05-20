function hitungStatistik(data) {
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

let data1 = [2, 4, 6, 8];
hitungStatistik(dataAwal);