import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'createAccount', component:CreateAccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
