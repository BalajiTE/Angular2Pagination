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
// template assignment by defining the component
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent() {
    }
    ProductDetailsComponent.prototype.ngOnInit = function () { };
    ProductDetailsComponent.prototype.CloseProductDetailsView = function () {
        this.product = null;
    };
    ProductDetailsComponent.prototype.resetProduct = function (productForm) {
        productForm.form.reset();
    };
    ProductDetailsComponent.prototype.saveProductDetails = function () {
        alert('Saved Changes Successfully ! ! !');
        this.product = null;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProductDetailsComponent.prototype, "product", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ProductDetailsComponent.prototype, "isReadOnly", void 0);
    ProductDetailsComponent = __decorate([
        core_1.Component({
            selector: 'ProductDetails',
            templateUrl: 'app/views/products/productDetailsView.html'
        }),
        __metadata("design:paramtypes", [])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=productDetailsComponent.js.map