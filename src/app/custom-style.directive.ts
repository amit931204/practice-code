import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {
//generate instance in constructor "el or element this is name only"
  constructor(private el: ElementRef) { 
    el.nativeElement.style.color="orange"
  }

}
