var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(lastName) {
        this.LastName = lastName;
    }
    return Person;
}());
var Firstname = /** @class */ (function (_super) {
    __extends(Firstname, _super);
    function Firstname(lastName, firstName) {
        var _this = _super.call(this, lastName) || this;
        _this.Firstname = firstName;
        return _this;
    }
    Firstname.prototype.display = function () {
        console.log("Last Name: " + this.LastName);
        console.log("First Name: " + this.Firstname);
    };
    return Firstname;
}(Person));
var obj = new Firstname("Ponnusamy", "Vikas");
obj.display();
