import { Component, Input } from '@angular/core';
import { HeaderCategoryDTO } from '../header-category-dto';

@Component({
  selector: 'app-header-category',
  templateUrl: 'header-category.component.html',
  styleUrls: ['header-category.component.css'
  ]
})
export class HeaderCategoryComponent {
    @Input() public category:HeaderCategoryDTO;
}
