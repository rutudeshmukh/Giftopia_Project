import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  checkoutFormGroup: FormGroup;

  totalPrice:number = 0;
  totalQuantity: number = 0;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
      
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName:[''],
        lastName:[''],
        email:['']
      }),
      shippingAddress: this.formBuilder.group({
        street:[''],
        city:[''],
        state:[''],
        country:[''],
        zipCode:['']
      }),
      billingAddress: this.formBuilder.group({
        street:[''],
        city:[''],
        state:[''],
        country:[''],
        zipCode:['']
      }),
      creditCard: this.formBuilder.group({
        cardType:[''],
        nameOnCard:[''],
        cardNumber:[''],
        securityCode:[''],
        expirationMonth:[''],
        expirationYear:['']
      })
    });
  }

    copyShippingAddressToBillingAddress(event){
      if(event.target.checked){
        this.checkoutFormGroup.controls['billingAddress']
        .setValue(this.checkoutFormGroup.controls['shippingAddress'].value);
      
      // bug fix for states
      //this.billingAddressStates = this.shippingAddressStates;
      }
      else{
        this.checkoutFormGroup.controls['billingAddress'].reset();
        // bud fix for states
        //this.billingAddressStates = [];
      }

    }
    onSubmit(){
      console.log("Handling the submit button");
      console.log("The email ddress is "+ this.checkoutFormGroup.get('customer').value.email);
    }
  
}
