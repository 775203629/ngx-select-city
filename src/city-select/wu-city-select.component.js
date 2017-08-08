"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var wu_city_select_service_1 = require("./wu-city-select.service");
var WuCitySelectComponent = (function () {
    function WuCitySelectComponent(wuCitySelectService) {
        this.wuCitySelectService = wuCitySelectService;
        this.result = new core_1.EventEmitter();
        this.isExpand = false;
    }
    WuCitySelectComponent.prototype.ngOnInit = function () {
        this.list = this.wuCitySelectService.getAddress();
    };
    WuCitySelectComponent.prototype.selectHandle = function (provinceItem, cityItem, districtItem) {
        this.isExpand = false;
        this.selected = provinceItem.name + '/' + cityItem.name + '/' + districtItem.name;
        var value = provinceItem.value + '/' + cityItem.value + '/' + districtItem.value;
        this.result.emit({ name: this.selected, value: value });
    };
    return WuCitySelectComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WuCitySelectComponent.prototype, "result", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WuCitySelectComponent.prototype, "selected", void 0);
WuCitySelectComponent = __decorate([
    core_1.Component({
        selector: 'app-wu-city-select',
        template: "\n      <div class=\"wu-city-select\">\n        <div class=\"select\" (click)=\"isExpand = !isExpand\">\n          <input type=\"text\" placeholder=\"\u9009\u62E9\u6240\u5728\u5730\u533A\" [(ngModel)]=\"selected\" [disabled]=\"true\">\n        </div>\n        <div class=\"list-menu\" *ngIf=\"isExpand\">\n          <div class=\"sub-list\">\n            <ul>\n              <li *ngFor=\"let item of list | wuCitySelect\"\n              (click)=\"provinceId = item.value;provinceName = item.name;cityId = undefined;provinceItem = item\"\n                [class.active]=\"item.value === provinceId\">{{item.name}}</li>\n            </ul>\n          </div>\n          <div class=\"sub-list\" *ngIf=\"provinceId\">\n            <ul>\n              <li *ngFor=\"let item of list | wuCitySelect:provinceId\"\n              (click)=\"cityId = item.value;cityName = item.name;cityItem = item\" [class.active]=\"item.value === cityId\">{{item.name}}</li>\n            </ul>\n          </div>\n          <div class=\"sub-list\" *ngIf=\"cityId\">\n            <ul>\n              <li *ngFor=\"let item of list | wuCitySelect:cityId\"\n                (click)=\"districtId = item.value;districtName = item.name;districtItem = item;selectHandle(provinceItem,cityItem,districtItem);\"\n                [class.active]=\"item.value === districtId\">{{item.name}}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    ",
    }),
    __metadata("design:paramtypes", [wu_city_select_service_1.WuCitySelectService])
], WuCitySelectComponent);
exports.WuCitySelectComponent = WuCitySelectComponent;
//# sourceMappingURL=wu-city-select.component.js.map