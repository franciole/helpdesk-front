import { ChamadoUpdateComponent } from './component/chamado/chamado-update/chamado-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './auth/auth.guard';

import { TecnicoListComponent } from './component/tecnico/tecnico-list/tecnico-list.component';
import { TecnicoCreateComponent } from './component/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './component/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './component/tecnico/tecnico-delete/tecnico-delete.component';

import { ClienteListComponent } from './component/cliente/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './component/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './component/cliente/cliente-delete/cliente-delete.component';

import { ChamadoListComponent } from './component/chamado/chamado-list/chamado-list.component';
import { ChamadoCreateComponent } from './component/chamado/chamado-create/chamado-create.component';
import { ChamadoReadComponent } from './component/chamado/chamado-read/chamado-read.component';

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
      { path: 'home', component: HomeComponent, },

      { path: 'tecnicos', component: TecnicoListComponent, },
      { path: 'tecnicos/create', component: TecnicoCreateComponent, },
      { path: 'tecnicos/update/:id', component: TecnicoUpdateComponent, },
      { path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent, },

      { path: 'clientes', component: ClienteListComponent, },
      { path: 'clientes/create', component: ClienteCreateComponent, },
      { path: 'clientes/update/:id', component: ClienteUpdateComponent, },
      { path: 'clientes/delete/:id', component: ClienteDeleteComponent, },

      { path: 'chamados', component: ChamadoListComponent},
      { path: 'chamados/create', component: ChamadoCreateComponent},
      { path: 'chamados/update/:id', component: ChamadoUpdateComponent},
      { path: 'chamados/read/:id', component: ChamadoReadComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
