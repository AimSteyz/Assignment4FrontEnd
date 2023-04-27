import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent} from './search/search.component';
import { HomeComponent } from './home/home.component';
import { AskComponent } from './ask/ask.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // default route
  { path: 'login', component: LoginComponent }, // login route
  { path: 'register', component: RegisterComponent }, // register route
  { path: 'search', component: SearchComponent }, // search route
  { path: 'askQuestion', component: AskComponent }, // ask route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
