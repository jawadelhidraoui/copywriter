import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about-us", component: AboutusComponent},
  {path: "contact", component: ContactComponent },
  {path: "our-offer", component: OffersComponent},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "**", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
