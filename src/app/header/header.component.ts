import { Component, OnInit } from '@angular/core';
import { HeaderCategoryDTO } from './header-category-dto';

@Component({
  selector: 'app-header',
  templateUrl: `header.components.html`,
  styleUrls: [`header.components.css`]
})
export class HeaderComponent implements OnInit {
  public display = 'flex';
  public headerCategories : HeaderCategoryDTO[] = [new HeaderCategoryDTO("Accueil", "home"),
                                  new HeaderCategoryDTO("A Propos", "about-us"),
                                  new HeaderCategoryDTO("Notre Offre", "our-offer"),
                                  new HeaderCategoryDTO("Contact", "contact")];

  public ngOnInit(): void{
    this.updateDisplay();
    window.addEventListener('resize', this.updateDisplay.bind(this));
  }

  private updateDisplay():void {
    this.display = 'flex';
    if (window.innerWidth < 900) {
      this.display = 'none';
    }
  }
}