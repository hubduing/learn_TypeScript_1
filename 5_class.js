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
var TypeScript = /** @class */ (function () {
    function TypeScript(version) {
        this.version = version;
    }
    TypeScript.prototype.info = function (name) {
        return "[" + name + "]: TypeScript version is " + this.version;
    };
    return TypeScript;
}());
// class Car {
//     readonly modek: string,
//     readonly numerOfWheels: number = 42
//
//     constructor(theModal: string) {
//         this.modal = theModal
//     }
// }
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numerOfWheels = 4;
    }
    return Car;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.vioce = '';
        this.color = 'black';
    }
    Animal.prototype.go = function () {
        console.log("go");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.SetVoice = function (voice) {
        this.vioce = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
console.log(cat.color);
//================
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('Component on render');
    };
    AppComponent.prototype.imfo = function () {
        return "This is info";
    };
    return AppComponent;
}(Component));
