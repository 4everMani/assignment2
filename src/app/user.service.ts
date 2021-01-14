import { User } from "./user.model";

export class UserServices{
//   users =[{
//     name:'manish jaiswal',
//     email:'jaiswal.manish49@gmail.com',
//     username: '4ever_mani'
//   },
//   {
//   name:'Krishu Rawat',
//   email:'krishur1996@gmail.com',
//   username: 'krawat45'
//   }    
// ]

  users:User[] =[]

  addUser(name:string,email:string,username:string){
    this.users.push({name:name,email:email,username:username});
    // this.users.push({})
    //console.log(this.users)
  }


}