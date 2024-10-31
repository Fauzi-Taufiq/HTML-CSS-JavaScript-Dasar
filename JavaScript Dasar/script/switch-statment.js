const nilai = "A"

switch (nilai) {
    case "A":
        document.writeln("<p>Wow Anda Lulus dengan Baik</p>")
        break;
    case "B":
    case "C":
        document.writeln("<p>Anda lulus</p>")
        break
    case "D":
        document.writeln("<p>Anda tidak lulus</p>")
        break
    default:
        document.writeln("<p>Mungkin anda salah jurusan</p>")
        break;
}