import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `app.components.html`,
  styleUrls: [`app.components.css`]
})
export class AppComponent implements AfterViewInit{
  title = 'ng-portfolio-app';

  ngAfterViewInit() {
    document.addEventListener('wheel', function(event) {
      if (event.ctrlKey) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, {passive: false});
  }
}
