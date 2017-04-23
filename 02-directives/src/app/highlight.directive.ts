import { Directive, ElementRef, Renderer, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  // constructor(private elementRef: ElementRef, private renderer : Renderer) {

  //     //this.elementRef.nativeElement.style.backgroundColor = 'red';
  //     this.renderer.setElementStyle(this.elementRef.nativeElement, 'color','blue');
  //  }

@Input() defaultColor = 'white';

@Input('highlight') highlightColor = 'red';

backgroundColor :String = 'black';
@HostListener('mouseenter')
onMouseEnter(){
  this.backgroundColor = this.highlightColor;
}

@HostListener('mouseleave')
onMouseLeave(){
  this.backgroundColor = this.defaultColor;
}

@HostBinding('style.color') get setColor(){
    return this.backgroundColor;
}

ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.backgroundColor = this.defaultColor;
}

}
