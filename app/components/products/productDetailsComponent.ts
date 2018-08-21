import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products/product';
import { NgForm } from '@angular/forms';

// template assignment by defining the component
@Component ({
    selector: 'ProductDetails',
    templateUrl:'app/views/products/productDetailsView.html'
 })

 export class ProductDetailsComponent implements OnInit { 
    @Input() product: Product;
    @Input() isReadOnly: boolean;
        
    constructor() {}

    ngOnInit() { }
     
    CloseProductDetailsView() {
      this.product = null
    }

    resetProduct(productForm: NgForm) {
      productForm.form.reset();
    }

    saveProductDetails() {
      alert('Saved Changes Successfully ! ! !');
      this.product = null;
    }
  }