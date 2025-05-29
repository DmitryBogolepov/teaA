import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit,OnDestroy {
  private subscriptionOrder: Subscription | null = null;
  constructor(private fb:FormBuilder,private productService:ProductService) { }

  ngOnInit(): void {
  }
  orderForm = this.fb.group({
    product:['',[Validators.required]],
    personalInfo: this.fb.group({
      name:['',[Validators.required,Validators.pattern(/^[a-zA-Zа-яА-Я]$/)]],
      last_name:['',[Validators.required,Validators.pattern(/^[a-zA-Zа-яА-Я]$/)]],
      phone:['',[Validators.required,Validators.pattern(/^\+?\d{11}$/)]]
    }),
    addressInfo: this.fb.group({
      country:['',[Validators.required,Validators.pattern(/^[\p{L}\s\-]+$/u)]],
      zip:['',[Validators.required,Validators.pattern(/^\d{5,6}$/)]],
      address:['',[Validators.required, Validators.pattern(/^[\p{L}\d\s\-\/]+$/u)]]
    }),
    comment:['']
  })



  public createOrder() {
    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }
    const formValue = this.orderForm.value;
    const personalInfo = formValue.personalInfo;
    const addressInfo = formValue.addressInfo;

    if (!personalInfo || !addressInfo) {
      console.error('Некорректные данные формы');
      return;
    }
    const dataToSend = {
      product: formValue.product ?? '',
      name: personalInfo.name ?? '',
      last_name: personalInfo.last_name ?? '',
      phone: personalInfo.phone ?? '',
      country: addressInfo.country ?? '',
      zip: addressInfo.zip ?? '',
      address: addressInfo.address ?? '',
      comment: formValue.comment
    };

    this.subscriptionOrder = this.productService.createOrder(dataToSend).subscribe({
      next: (response) => {
        if (response.success) {
          console.log('Order created successfully');
        } else {
          console.error('Server error:', response.message);
        }
      },
      error: (error) => {
        console.error('HTTP error:', error);
      }
    });
  }


  ngOnDestroy() {
    this.subscriptionOrder?.unsubscribe();
  }
}
