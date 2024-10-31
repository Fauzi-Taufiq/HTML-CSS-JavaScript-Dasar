const orang = {
    "nama lengkap" : "Fauzi Taufiq",
alamat : "Indonesia",
umur : 20
};

// orang["nama"] = "Muhammad Taufiq Al Fauzi"
// orang["alamat"] = "Indonesia"
// orang["umur"] = 20
console.info(`Nama : ${orang["nama lengkap"]}`)
console.info(`Alamat : ${orang.alamat}`)
console.info(`Umur : ${orang.umur}`)

console.table(orang)

delete orang["umur"]

console.table(orang)