import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  orderForm = this.fb.group({
    product:['',[Validators.required]],
    personalInfo: this.fb.group({
      name:['',[Validators.required]],
      last_name:['',[Validators.required]],
      phone:['',[Validators.required]]
    }),
    addressInfo: this.fb.group({
      country:['',[Validators.required]],
      zip:['',[Validators.required]],
      address:['',[Validators.required]]
    }),
    comment:['']
  })


  onSubmit() {

  }
}
