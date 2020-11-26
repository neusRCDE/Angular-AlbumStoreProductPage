import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductService,
    HttpModule
  ],
  providers: [ProductService],
  exports: [ ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
