import { Directive,ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '.highlight1'
})
export class Highlight1Directive {

  constructor(private elementRef: ElementRef, private renderer : Renderer) {

      //this.elementRef.nativeElement.style.backgroundColor = 'red';
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color','yellow');
   }

}
