import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { AddService } from 'src/app/service/add.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {

  userId:any;
  userDataById:any;



  // contacts$:any;
  // postData$:any;
  // postDataById$:any;
  // users:any;
  // status:any;
  // dataStatus:any;
  constructor(private addService:AddService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {


    // geting the id from the router link

    this.activatedRoute.params.subscribe(data=>{
      this.userId=data['id'];
      console.log(data['id']);
    })

    this.addService.getUserDataId(this.userId).subscribe(data=>{
      this.userDataById=data;
      console.log(data);
    })
    










    // this.users=['Saurabh','Shailesh','Shankar','Balaram','Tanveer','Uttam'];
 
    // this.contacts$=of(this.users);
    // console.log(this.contacts$);

    // new Observable(sub=>{
    //   sub.next(this.users)
    // }).subscribe(data=>{
    //   this.dataStatus=data;
    //  console.log(data);
    // })
  
    // new Observable(ob=>{

    //   setTimeout(() => {
    //     ob.next('data is processing....')
    //   }, 2000);

    //   setTimeout(()=>{
    //     ob.next("data is processed...")
    //   },4000)

    //   setTimeout(()=>{
    //     ob.next("process is completed ")
    //   },6000)
    // }).subscribe(data=>{
    //   this.status=data;
    // },error=>{
    //   console.log("Error")
    // })


    // http get request 

  //  this.userService.getData().subscribe(data=>{
  //     this.postData$=data;
  //  })

  //  this.userService.getDataById().toPromise().then(data=>{
  //     this.postDataById$=data;
  // });
  

  }

}
