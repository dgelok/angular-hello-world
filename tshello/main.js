// function log(message) {
//     console.log(message)
// }
// log("Hello WOrld!")
// var number = 1;
// number = "D";
// function doSomething() {
//     for (var i = 0; i <5; i++) {
//         console.log(i);
//     }
//     console.log("Finally: " + i)
// }
// doSomething();
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('whatever');
    };
    Point.prototype.getDistance = function () {
        return "the distance";
    };
    return Point;
}());
