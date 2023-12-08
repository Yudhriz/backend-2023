const persiapan = () => {
  setTimeout(() => {
    console.log("Mempersiapan Bahan ....");
  }, 3000);
};

const rebusAir = () => {
  setTimeout(() => {
    console.log("Merebus Air ...");
  }, 7000);
};

const masak = () => {
  setTimeout(() => {
    console.log("Memasak Mie ...");
    console.log("Selesai");
  }, 5000);
};

const main = () => {
  persiapan();
  rebusAir();
  masak();
};

main();
