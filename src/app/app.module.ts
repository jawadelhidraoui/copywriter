import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BackgroundDirective } from './background.directive';
import { FooterComponent } from './footer/footer.component';
import { HeaderCategoryComponent } from './header/header-category/header-category.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OffersComponent } from './offers/offers.component';
import { ContactComponent } from './contact/contact.component';
import { NicetomeetyouComponent } from './aboutus/nicetomeetyou/nicetomeetyou.component';
import { NothingimpossibleComponent } from './aboutus/nothingimpossible/nothingimpossible.component';
import { HeightDirective } from './height.directive';
import { WidthDirective } from './width.directive';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { QuiSuisJeComponent } from './home/qui-suis-je/qui-suis-je.component';
import { CuriosityComponent } from './home/curiosity/curiosity.component';
import { MesServicesComponent } from './home/mes-services/mes-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BackgroundDirective,
    FooterComponent,
    HeaderCategoryComponent,
    HeroSectionComponent,
    AboutusComponent,
    OffersComponent,
    ContactComponent,
    NicetomeetyouComponent,
    NothingimpossibleComponent,
    HeightDirective,
    WidthDirective,
    QuiSuisJeComponent,
    CuriosityComponent,
    MesServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
