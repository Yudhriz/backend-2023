/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
// function showDownload(result) {
//   console.log("Download selesai");
//   console.log("Hasil Download: " + result);
// }


/**
 * Fungsi untuk show download
 * Function promise
 */
const showDownload = () => {
  return new Promise((resolve) => {
    resolve("Download selesai");
  });
};

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */
// function download(callShowDownload) {
//   setTimeout(function () {
//     const result = "windows-10.exe";
//     callShowDownload(result);
//   }, 3000);
// }

// download(showDownload);

/**
 * Fungsi untuk download file
 * Function promise
 */
const downloadFile = () => {
  return new Promise((resolve) => {
    const result = "windows-10.exe";
    setTimeout(() => {
      resolve("Hasil Download: " + result);
    }, 3000);
  });
};

/**
 * Function Async Await
 */
const download = async () => {
  console.log(await showDownload());
  console.log(await downloadFile());
};

download();

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
