const persiapan = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Mempersiapan Bahan ....");
    }, 3000);
  });
};

const rebusAir = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Merebus Air ...");
    }, 7000);
  });
};

const masak = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Memasak Mie ...");
    }, 5000);
  });
};

// consuming promise

const main = () => {
  persiapan()
    .then((res) => {
      console.log(res);
      return rebusAir();
    })
    .then((res) => {
      console.log(res);
      return masak();
    })
    .then((res) => {
      console.log(res);
    });
};

main();
