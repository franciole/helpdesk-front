import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './component/home/home.component';
import { TecnicoListComponent } from './component/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { TecnicoCreateComponent } from './component/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './component/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './component/tecnico/tecnico-delete/tecnico-delete.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: NavComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'tecnicos',
        component: TecnicoListComponent,
      },
      {
        path: 'tecnicos/create',
        component: TecnicoCreateComponent,
      },
      {
        path: 'tecnicos/update/:id',
        component: TecnicoUpdateComponent,
      },
      {
        path: 'tecnicos/delete/:id',
        component: TecnicoDeleteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
