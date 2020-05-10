import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  user: any;
  @Input("name") userName: string;

  constructor() { 
    // this.user = {
    //   name: Vicky,
    //   title: 'Software Developer',
    //   address: '12345, Main St, Hyderabad, 100101',
    //   phone: [
    //     '123-123-1234',
    //     '456-456-4567',
    //     '789-789-7890'
    //   ]
    // };
  }
    
  ngOnInit() {
    this.user = {
      name: this.userName,
      title: 'Software Developer',
      address: '12345, Main St, Hyderabad, 100101',
      phone: [
        '123-123-1234',
        '456-456-4567',
        '789-789-7890'
      ]
    };
  }

}
