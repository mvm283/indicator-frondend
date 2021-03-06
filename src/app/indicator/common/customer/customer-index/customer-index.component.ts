import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/indicator/models/common/customer.model';
import { CustomerService } from 'src/app/indicator/services/customer.service';

@Component({
  selector: 'app-customer-index',
  templateUrl: './customer-index.component.html'
})
export class CustomerIndexComponent implements OnInit {

  customers: Array<Customer> = [];

  constructor(private customerService: CustomerService) {
    
   }
  
  ngOnInit(): void {
    this.customerService.index().subscribe(data => {
      this.customers = data;
    })
  }

}
