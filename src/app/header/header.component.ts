import { Component, HostListener } from '@angular/core';
import { HeaderCategoryDTO } from './header-category-dto';

@Component({
  selector: 'app-header',
  templateUrl: `header.components.html`,
  styleUrls: [`header.components.css`]
})
export class HeaderComponent {
  public headerCategories : HeaderCategoryDTO[] = [new HeaderCategoryDTO("Accueil", "home"),
                                  new HeaderCategoryDTO("A Propos", "about-us"),
                                  new HeaderCategoryDTO("Notre Offre", "our-offer"),
                                  new HeaderCategoryDTO("Contact", "contact")];
}