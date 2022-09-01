import { Conditional } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddService } from 'src/app/service/add.service';


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

  addUserForm: FormGroup=new FormGroup({});

  constructor(private formBuilder:FormBuilder,private addService:AddService,private _matSnack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.addUserForm=this.formBuilder.group({
      'id':new FormControl('',[Validators.required,Validators.minLength(1)]),
      'userName':new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
      'address':new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
      'email':new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(40)])
    })

   

  }

  submitForm(){
    console.log(this.addUserForm.value)
    this.addService.postUser(this.addUserForm.value).subscribe(data=>{
      console.log(data);
      this._matSnack.open("Created user successfully !")
    },err=>{
      this._matSnack.open("Unable to create user")
    })

    this.addUserForm.reset()
    this.router.navigate(['users/','list'])

  }

}
