import { Component, OnInit } from '@angular/core';
import { UserServices } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  
})
export class UsersComponent implements OnInit {

  constructor(private userServices:UserServices) { }

  ngOnInit(): void {
  }

  onAddUser(name:string,email:string,username:string){
    this.userServices.addUser(name,email,username);
    // document.getElementById('1').onreset()
  }

}
