import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
  @Input('appBackground') backgroundImage: string;

  constructor(private el: ElementRef) { }

  public ngOnInit(): void {
    this.setBackgroundImage(this.backgroundImage);
  }

  private setBackgroundImage(url: string): void {
    this.el.nativeElement.style.backgroundImage = `url(${url})`;
    this.el.nativeElement.style.backgroundSize = "cover";
  }
}
