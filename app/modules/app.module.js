"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular imports
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
// Service(s) related imports
var pager_services_index_1 = require("../services/common/pager.services.index");
// Common compoent imports
var app_headerComponent_1 = require("../components/common/app.headerComponent");
// Product example related imports
var productsComponent_1 = require("../components/products/productsComponent");
var productDetailsComponent_1 = require("../components/products/productDetailsComponent");
var productsSearchComponent_1 = require("../components/products/productsSearchComponent");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule],
            declarations: [
                productsComponent_1.ProductComponent,
                app_headerComponent_1.HeaderComponent,
                productDetailsComponent_1.ProductDetailsComponent,
                productsSearchComponent_1.ProductsSearchComponent
            ],
            providers: [pager_services_index_1.PagerService],
            bootstrap: [productsComponent_1.ProductComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map