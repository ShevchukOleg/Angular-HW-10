import { Directive, HostListener, ElementRef, Input} from '@angular/core';
/**
 * експерементальна директива з різними підходами о управління елементом
 */
@Directive({
  selector: '[appColorChanger]'
})
export class ColorChangerDirective {
  public nativeElement;
  private counting: number;
  @Input('appColorChanger') color: string;

  constructor(nativeElementWrapper: ElementRef) {
    this.nativeElement = nativeElementWrapper.nativeElement;
   }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.colorChanger('orange');
  // }

  @HostListener('mouseenter', [`$event.target`]) onMouseEnter(targetElement) {
    targetElement.style.color = this.color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.nativeElement.style.color = 'green';
  }

  public colorChanger(color: string) {
    this.nativeElement.style.color = color;
  }
}
