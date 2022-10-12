import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './component/home/home.component';
import { TecnicoListComponent } from './component/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'tecnicos',
        component: TecnicoListComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
