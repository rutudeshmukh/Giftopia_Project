import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product!: Product;
  constructor(private productService: ProductService,
              private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.handleProductDetails();
    })
  }
  handleProductDetails() {
    //get the id param string. convert string to a number using the "+" symbol
    // I've added ! to end to remove error in below line
    const theProductId: number = +this.route.snapshot.paramMap.get('id')!;
     
    this.productService.getProduct(theProductId).subscribe(
      //data=>{   original line
      (      data: Product)=>{
        this.product=data;
      }
    )
  }

}
