const person = {
    firstName : "Fauzi",
    lastName : "Taufiq"
}

if ("firstName" in person) {
    alert(`Hello ${person.firstName}`)
} else {
    alert("Hello")
}

const students = {
    firstName : "Fauzi",
    midName : undefined,
    lastName : "Taufiq"
}

if ("midName" in students) {
    alert(`Hello ${students.midName}`)
} else {
    alert("Hello Students")
}