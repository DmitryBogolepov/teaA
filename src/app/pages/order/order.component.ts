import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit,OnDestroy {
  private subscriptionOrder: Subscription | null = null;
  public successResponse:boolean = true;
  public errorResponse:boolean = false;
  public isSubmitting = false;
  constructor(private fb:FormBuilder,private productService:ProductService,private activatedRoute:ActivatedRoute) { }
  private subscription: Subscription | null = null;
  public orderForm = this.fb.group({
    product:[{value:'', disabled:true},[Validators.required]],
    personalInfo: this.fb.group({
      name:['',[Validators.required,Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ]+$/)]],
      last_name:['',[Validators.required,Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ]+$/)]],
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

    this.isSubmitting = true;
    const formValue = this.orderForm.getRawValue();
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
          console.log('Success response:' + response.success);
        } else {
          console.error('Server error:', response.message);
          this.errorResponse = true;
        }
      },
      error: (error) => {
        console.error('HTTP error:', error);
      },
      complete:() => {
        this.isSubmitting = false;
        this.successResponse = false;
      }
    });
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.orderForm.get('product')?.setValue(params['product']);
      }
    });
  }
  ngOnDestroy() {
    this.subscriptionOrder?.unsubscribe();
  }
}
