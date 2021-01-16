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
    if(name.length>0 && email.length>0 && username.length>0){
      this.userServices.addUser(name,email,username);
      
    }
    else{
      alert(`    Invalid input!
    Please fill required field.`)
    }
    
    // document.getElementById('1').onreset()
  }

}
