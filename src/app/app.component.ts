import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-project';
  user: User;
  inputText: string = 'Initial Value';

  constructor(){
    this.user = new User();
    this.user.name = "Foo Bar";
    this.user.designation = "Software Developer";
    this.user.address = "James Street, Hyderabad, 231243";
    this.user.phone = [
        '123-123-1234',
        '456-456-4567',
        '789-789-7890'
    ];
  }
}
