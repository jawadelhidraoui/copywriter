import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class AppResizeDirective {
  private el:HTMLElement;

  constructor(private element: ElementRef) {
    this.el = element.nativeElement;
  }

  ngOnInit(){
    this.onResize();
  }

  ngAfterViewInit() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    console.log("innerWidth : " + window.innerWidth);
    if (window.innerWidth < 800){
      this.el.style.display = "none";
    } else {
      this.el.style.display = "flex";
    }
  }

}
