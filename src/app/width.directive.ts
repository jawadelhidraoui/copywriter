import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appWidth]'
})
export class WidthDirective implements OnInit {
  @Input() private width: number;

  constructor(private el : ElementRef) { }

  ngOnInit(): void {
    this.width = this.width == null ? 100 : this.width;
    this.setWidth();
  }

  private setWidth(){
    this.el.nativeElement.style.width = this.width;
  }


}
