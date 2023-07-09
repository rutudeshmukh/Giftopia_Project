import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GiftopiaFormService } from 'src/app/services/giftopia-form.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  checkoutFormGroup: FormGroup;

  totalPrice:number = 0;
  totalQuantity: number = 0;

  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];

  constructor(private formBuilder:FormBuilder,
              private giftopiaFormService: GiftopiaFormService){}

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

    //populate credit card months
    const startMonth:number = new Date().getMonth()+1;
    console.log("startMonth:" + startMonth);

    this.giftopiaFormService.getCreditCardMonths(startMonth).subscribe(
      data=>{
        console.log("Retrieved credit card months:" + JSON.stringify(data));
        this.creditCardMonths=data;
      }
    );

    //populate credit card years
    this.giftopiaFormService.getCreditCardYears().subscribe(
      data=>{
        console.log("Retrieved credit card years:" + JSON.stringify(data));
        this.creditCardYears=data;
      }
    );

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
    handleMonthsAndYears(){

      const creditCardFormGroup = this.checkoutFormGroup.get('creditCard');

      const currentYear: number = new Date().getFullYear();
      const selectedYear: number = Number(creditCardFormGroup.value.expirationYear);

      //if the current year equals the selected year, then start with the current month

      let startMonth: number;

      if(currentYear === selectedYear){
        startMonth = new Date().getMonth() + 1;
      }else{
        startMonth = 1;
      }

      this.giftopiaFormService.getCreditCardMonths(startMonth).subscribe(
        data=>{
          console.log("Retrieved credit card months: "+ JSON.stringify(data));
          this.creditCardMonths=data;
        }
      )
    }
}
