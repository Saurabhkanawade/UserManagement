import {
  FormGroup,
  FormBuilder,
  FormControlName,
  FormControl,
} from '@angular/forms';
import { AddService } from './../../service/add.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss'],
})
export class EditUsersComponent implements OnInit {
  loadform: boolean = false;
  usersId: any;
  userDetails: any;
  updateUserForm: FormGroup = new FormGroup({});

  constructor(
    private activatedRoute: ActivatedRoute,
    private addService: AddService,
    private _matSnack: MatSnackBar,
    private formBuilder: FormBuilder,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.loadform = false;

    this.activatedRoute.params.subscribe((userId) => {
      this.usersId = userId['id'];
      console.log(userId['id']);
    });

    if (this.usersId !== null) {
      this.addService
        .getUserDataId(this.usersId)
        .toPromise()
        .then((data) => {
          this.userDetails = data;
          // Object.assign(this.userDetails, data);
          console.log(data);

          this.updateUserForm = this.formBuilder.group({
            'userName': new FormControl(this.userDetails.userName),
            'address': new FormControl(this.userDetails.address),
            'email': new FormControl(this.userDetails.email),
          });
          this.loadform = true;
        })
        .catch((err) => {
          console.log('Unable to load the data');
        });

    }
  }

  submitForm() {
    console.log(this.updateUserForm.value);
    this.addService.updateUser(this.usersId,this.updateUserForm.value).subscribe(data=>{
      console.log("The data is updated ")
      this._matSnack.open("The User is Updated ");
    },err=>{
      this._matSnack.open("Unable to Update the user");
    })
    this.router.navigate(['users/','list'])

  }
}
