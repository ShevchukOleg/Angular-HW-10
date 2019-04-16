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

  // @HostListener('mouseenter') onMouseEsnter() {
  //   this.colorChanger('orange');
  // }

  @HostListener('mouseenter', [`$event.target`]) onMouseEsnter(targetElement) {
    targetElement.style.color = this.color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.nativeElement.style.color = 'green';
  }

  public colorChanger(color: string) {
    this.nativeElement.style.color = color;
  }
}
