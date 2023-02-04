import { AfterContentInit, AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: `aboutus.component.html`,
  styleUrls: ['aboutus.component.css'
  ]
})
export class AboutusComponent implements AfterViewInit, AfterContentInit{
  ngAfterContentInit(): void {
    this.scrollToTop();
  }
  ngAfterViewInit(): void {
    this.scrollToTop();
  }

  private scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
