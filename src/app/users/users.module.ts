import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button'
import {  RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 

@NgModule({
  declarations: [
    ViewUsersComponent,
    AddUsersComponent,
    DeleteUsersComponent,
    EditUsersComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ],
  exports:[
    AddUsersComponent,
    ViewUsersComponent,
    DeleteUsersComponent,
    EditUsersComponent
  ],
  providers:[
    { provide:MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue:{ duration:2500 }}
  ]
})
export class UsersModule { }
