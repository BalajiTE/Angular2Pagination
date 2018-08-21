// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Service(s) related imports
import { PagerService } from '../services/common/pager.services.index';
// Common compoent imports
import { HeaderComponent } from '../components/common/app.headerComponent';
// Product example related imports
import { ProductComponent } from '../components/products/productsComponent';
import { ProductDetailsComponent } from '../components/products/productDetailsComponent';
import { ProductsSearchComponent } from '../components/products/productsSearchComponent';

@NgModule({    
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: 
                [
                    ProductComponent, 
                    HeaderComponent,
                    ProductDetailsComponent,
                    ProductsSearchComponent
                ],
    providers: [PagerService],
    bootstrap: [ProductComponent]
})
export class AppModule { } 