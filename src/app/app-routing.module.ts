import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact-list", component: ContactlistComponent},
  {path: "new-contact", component: NewcontactComponent},
  {path: "employees-list", component: EmployeesComponent},
  {path: 'employee/:id', component: EmployeeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
