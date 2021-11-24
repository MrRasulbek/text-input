function random(min, max) {
               return Math.round(Math.random() * (max - min) + min)
}
function color() {
               r = random(0, 255)
               g = random(0, 255)
               b = random(0, 255)
               return `rgb(${r},${g},${b})`
}
let body = document.querySelector("body")
setInterval(() => {
               body.style.backgroundColor = color()
               body.style.transition = "0.5s"
}, 1000);

let userLibrary = []
while (true) {
               let operation = prompt("Iltimos verguldan oldin operatsiya kiriting, keyin malumot kiriting. Operatsiyalar add - kiritish uchun, del - kirilgan malumotni o'chirish uchun va stop - jarayonni to'xtatish uchun ishlatilinadi !","Operation, name")
               let deviding = operation.split(",")
               let firstComponent = deviding[0]
               let secondComponent = deviding[1]
               if (firstComponent=="add"){
                              userLibrary.push(secondComponent)
               }
               else if (firstComponent=="del"){
                              userLibrary.pop()
               }
               else if (firstComponent=="stop"){
                              break
               }
}
console.log(userLibrary);

