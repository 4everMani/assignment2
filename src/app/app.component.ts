import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserServices } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserServices]
  
})
export class AppComponent implements OnInit {
  users : User[]=[]
  userNumber : number
  constructor(private userService : UserServices){};

  ngOnInit(){
    this.users = this.userService.users
    
  }

  onDelete(index : number){
    this.users.splice(index,1);
    
  }
  

  
  
}
