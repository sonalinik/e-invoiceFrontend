import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDoor]'
})
export class DoorDirective {

  constructor(private el: ElementRef) { }
  @HostListener('keydown.Tab')
  onFormfocusout() {
    const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');
  
     if (invalidControl) {
     invalidControl.focus();  
     }
  }
}
