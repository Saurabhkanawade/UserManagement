import { ActivatedRoute } from '@angular/router';
import { AddService } from 'src/app/service/add.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.scss'],
})
export class DeleteUsersComponent implements OnInit {
  deleteUserId: string='';

  constructor(
    private _matSnack: MatSnackBar,
    private addService: AddService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.deleteUserId = data['id'];
      console.log(data['id']+"id")
    });

    if (this.deleteUserId) {
      this.addService.deleteUser(this.deleteUserId).subscribe(
        dataReturn => {
          console.log(dataReturn);
          this._matSnack.open('User Deleted Successfully ');
        },
        (err) => {
          this._matSnack.open('Unable to Delete the user');
        }
      );
      
    }
  }
}
