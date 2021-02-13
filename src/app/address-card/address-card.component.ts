import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  
  @Input("name") userName: string;
  @Input("user") user: User;
  isCollapsed: boolean = true;

  constructor() { 
    // this.user = {
    //   name: Vicky,
    //   designation: 'Software Developer',
    //   address: '12345, Main St, Hyderabad, 100101',
    //   phone: [
    //     '123-123-1234',
    //     '456-456-4567',
    //     '789-789-7890'
    //   ]
    // };
  }
    
  ngOnInit() {
    // this.user = {
    //   name: this.userName,
    //   designation: 'Software Developer',
    //   address: '12345, Main St, Hyderabad, 100101',
    //   phone: [
    //     '123-123-1234',
    //     '456-456-4567',
    //     '789-789-7890'
    //   ]
    // };
  }

  toggleIsCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
