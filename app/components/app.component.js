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
var index_1 = require("../services/index");
var core_1 = require("@angular/core");
var products_services_1 = require("../services/products.services");
require("rxjs/add/operator/map");
// template assignment by defining the component
var AppComponent = /** @class */ (function () {
    // constructor
    function AppComponent(_product, pagerService) {
        this._product = _product;
        this.pagerService = pagerService;
        // pager object
        this.pager = {};
    }
    // ngOnInit() function to support initialization
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iproducts = this._product.getproducts();
        this.iproducts.subscribe(function (iproducts) {
            _this.products = iproducts,
                //alert('completed');
                // initialize to page 1
                _this.setPage(1);
        });
    };
    AppComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        //alert(this.products.length);
        // get pager object from service
        this.pager = this.pagerService.getPager(this.products.length, page);
        // get current page of items
        this.pagedItems = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    // function to be called when user clicks on EDIT
    AppComponent.prototype.editProduct = function (selectedProductId) {
        alert('Hello, You have selected ' + selectedProductId);
    };
    // function to be called when user clicks on DELETE
    AppComponent.prototype.removeProduct = function (selectedProductId) {
        alert('Hello, Are you sure to Delete ' + selectedProductId);
    };
    ;
    var _a;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/views/app.products.html',
            providers: [products_services_1.ProductService]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof products_services_1.ProductService !== "undefined" && products_services_1.ProductService) === "function" && _a || Object, index_1.PagerService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map