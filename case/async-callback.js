const persiapan = () => {
  console.log("Persiapan");
};

const rebusAir = () => {
  console.log("Rerebus Air");
};

const masak = () => {
  console.log("Masak");
  console.log("Selesai");
};

const main = () => {
  setTimeout(() => {
    persiapan();

    setTimeout(() => {
      rebusAir();

      setTimeout(() => {
        masak();
      }, 5000);
    }, 7000);
  }, 3000);
};

main();