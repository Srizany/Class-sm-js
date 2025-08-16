var choise = prompt("Welcome to area calculator. \n Please enter your choise. \n1. Area of Rectangle. \n2. Area of Triangle. \n3. Area of Circle. \n4. Area of Parallelogram.")

if (choise == '1') {
    var l = prompt('enter the Lenth')
    var b = prompt('enter the Breadth')
    var result = Number(l) * Number(b)
    alert('The area is ' + result)
}

if (choise == '2') {
    var h = prompt('enter the Height')
    var b = prompt('enter the Base')
    var result = Number(h) * Number(b) /2
    alert('The area is ' + result)
}

if (choise == '3') {
    var r = prompt('enter the Radius')
    var result = 3.14*Number(r) * Number(r)
    alert('The area is ' + result)
}

if (choise == '4') {
    var h = prompt('enter the Height')
    var cb = prompt('enter the Corresponding baes')
    var result = Number(h) * Number(cb)
    alert('The area is ' + result)
}