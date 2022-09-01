import { ListUsersComponent } from './users/list-users/list-users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { DeleteUsersComponent } from './users/delete-users/delete-users.component';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';

const routes: Routes = [
  {
    path: 'users',

    children: [
      { path:'',component:ListUsersComponent},
      { path: 'list', component: ListUsersComponent },
      { path: 'add', component: AddUsersComponent },
      { path: 'view/:id', component: ViewUsersComponent },
      { path: 'delete/:id', component: DeleteUsersComponent },
      { path: 'edit/:id', component: EditUsersComponent },
    ],
  },
  { path: 'role', loadChildren: () => import('./role/role.module').then(m => m.RoleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
