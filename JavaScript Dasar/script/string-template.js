const name = "Muhammad Taufiq Al Fauzi"
const nilai = 90
const firstName = "Muhammad Taufiq"
const lastName = "Al Fauzi"
const template = `Nama : ${name} ${firstName} ${lastName}, Lulus : ${nilai > 75}`

const multiline = `Saya Fauzi,
Sekarang sedang belajar JavaScript,
Mahasiswa Universitas Amikom Yogyakarta`

document.writeln("<pre>")
document.writeln(multiline)
document.writeln("</pre>")

console.info(template)