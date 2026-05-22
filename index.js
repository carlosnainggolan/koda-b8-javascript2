function hitungStatistik(data) {
    try{
        if (!Array.isArray(data)) {
            throw new Error("Input harus berupa Array!", Error);
            return;
        }

        if (data.length === 0) {
            throw new Error("Error: Array tidak boleh kosong!", Error);
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
    }catch(error)
    {
        console.log(error);
    }
}

hitungStatistik([2, 4, 6, 8]);
hitungStatistik([]);