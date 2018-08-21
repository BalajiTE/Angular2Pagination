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
var pager_services_index_1 = require("../../services/common/pager.services.index");
var core_1 = require("@angular/core");
var products_services_1 = require("../../services/products/products.services");
require("rxjs/add/operator/map");
// template assignment by defining the component
var ProductComponent = /** @class */ (function () {
    // constructor
    function ProductComponent(_product, pagerService) {
        this._product = _product;
        this.pagerService = pagerService;
        this.newProduct = { ID: 27, Name: 'AB', Description: 'AB' };
        // pager object
        this.pager = {};
    }
    // ngOnInit() function to support initialization
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iproducts = this._product.getproducts();
        this.iproducts.subscribe(function (iproducts) {
            _this.products = iproducts,
                // initialize to page 1
                _this.setPage(1);
        });
    };
    ProductComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.products.length, page);
        // get current page of items
        this.pagedItems = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    // function to be called when user clicks on TABLE ROW
    ProductComponent.prototype.ShowDetails = function (showProduct) {
        this.selectedProduct = showProduct;
        this.formMode = true;
    };
    // function to be called when user clicks on Create New button
    ProductComponent.prototype.createNewProduct = function () {
        this.selectedProduct = this.newProduct;
        this.formMode = false;
    };
    // function to be called when user clicks on EDIT
    ProductComponent.prototype.editProduct = function (selectedProduct) {
        this.selectedProduct = selectedProduct;
        this.formMode = false;
    };
    // function to be called when user clicks on DELETE
    ProductComponent.prototype.removeProduct = function (selectedProductId) {
        this.selectedProduct = null;
        alert('Are you sure to Delete ' + selectedProductId);
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'Products',
            templateUrl: 'app/views/products/productsView.html',
            providers: [products_services_1.ProductService]
        }),
        __metadata("design:paramtypes", [products_services_1.ProductService, pager_services_index_1.PagerService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=productsComponent.js.map