import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AddService } from 'src/app/service/add.service';

export interface User {
  id: number;
  userName: string;
  address: string;
  email:string;
}

const ELEMENT_DATA: User[] = [
];


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],


})
export class ListUsersComponent implements OnInit {
 
    displayedColumns: string[] = ['id', 'userName', 'address','email','actions'];
    dataSource = ELEMENT_DATA;
    
  userData: User[]=[];
  userId$: any;


  constructor(
    private addService: AddService) {}

  ngOnInit(): void {



    // list all users data

    this.addService.getUserData().subscribe((data) => {
      this.dataSource= data;
      console.log(data);
    });


  }
}
