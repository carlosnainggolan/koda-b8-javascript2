function utils (data) {
  if (!Array.isArray(data)) {
    throw new Error("Input Harus Bertipe Array");
  }

  if (data.length <= 0) {
    throw new Error("Array Tidak Boleh Kosong");
  }

  let max = data[0];
  let min = data[0];
  let avg = 0;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] !== "number") {
      throw new Error("Data di dalam Array Harus Bertipe Number");
    }
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
  return{avg, min, max}
}

module.exports = {utils};