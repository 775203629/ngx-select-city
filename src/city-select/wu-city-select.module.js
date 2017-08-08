"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var wu_city_select_pipe_1 = require("./wu-city-select.pipe");
var wu_city_select_service_1 = require("./wu-city-select.service");
var wu_city_select_component_1 = require("./wu-city-select.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var WuCitySelectModule = (function () {
    function WuCitySelectModule() {
    }
    return WuCitySelectModule;
}());
WuCitySelectModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            forms_1.FormsModule,
            common_1.CommonModule,
        ],
        declarations: [
            wu_city_select_component_1.WuCitySelectComponent,
            wu_city_select_pipe_1.WuCitySelectPipe
        ],
        providers: [wu_city_select_service_1.WuCitySelectService],
        exports: [wu_city_select_component_1.WuCitySelectComponent]
    })
], WuCitySelectModule);
exports.WuCitySelectModule = WuCitySelectModule;
//# sourceMappingURL=wu-city-select.module.js.map