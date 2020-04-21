import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { NewcontactComponent } from './newcontact/newcontact.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact-list", component: ContactlistComponent},
  {path: "new-contact", component: NewcontactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
