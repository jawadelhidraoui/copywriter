import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHeight]'
})
export class HeightDirective implements OnInit{
  @Input('appHeight') height: string;

  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    this.height = this.height == "" || this.height == null ? (screen.availHeight-100).toString() : this.height;
    this.setHeight();
  }

  private setHeight(){
    this.el.nativeElement.style.height = this.height + "px";
  }

}
