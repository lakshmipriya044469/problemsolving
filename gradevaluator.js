let mark = '90'

if (mark > 90 && mark <= 100) {
    console.log("Grade A");
} else if (mark > 80 && mark <= 90) {
    console.log("Grade B");
} else if (mark > 70 && mark <= 80) {
    console.log("Grade C");
} else if (mark > 60 && mark <= 70) {
    console.log("Grade D");
} else if (mark >= 0 && mark <= 60) {
    console.log("Grade F");
} else {
    console.log("Invalid marks! Enter between 0 and 100");
}