"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WuCitySelectPipe = (function () {
    function WuCitySelectPipe() {
    }
    WuCitySelectPipe.prototype.transform = function (arr, parent) {
        if (!parent) {
            return arr.filter(this.isProvince);
        }
        else if (parent) {
            return this.isChild(arr, parent);
        }
        return [];
    };
    WuCitySelectPipe.prototype.isProvince = function (e) {
        return !e.parent;
    };
    WuCitySelectPipe.prototype.isChild = function (arr, parent) {
        var _arr = [];
        arr.forEach(function (item) {
            if (item.parent === parent) {
                _arr.push(item);
            }
            ;
        });
        return _arr;
    };
    return WuCitySelectPipe;
}());
WuCitySelectPipe = __decorate([
    core_1.Pipe({
        name: 'wuCitySelect'
    })
], WuCitySelectPipe);
exports.WuCitySelectPipe = WuCitySelectPipe;
//# sourceMappingURL=wu-city-select.pipe.js.map