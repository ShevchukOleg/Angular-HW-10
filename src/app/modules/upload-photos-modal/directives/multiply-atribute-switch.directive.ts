import { Directive, ElementRef, Input, OnInit} from '@angular/core';
/** Директива для зміни атрибуту в інпуті модального вікна відвантаження зображень
 * повинна додавати чи видаляти атрибут в залежності від типу данних, якщо тло сторінки або
 * аватар атрибут multiple не додаэться, у випадку відвантаження зображень користувача
 * атрибут повинен додаватись
 */
@Directive({
  selector: '[appMultiplyAtributeSwitch]'
})

export class MultiplyAtributeSwitchDirective implements OnInit {
  /** DOM елемент до якого застосовано директиву */
  public nativeElement;

  /** вхідний параметр від класу компоненти що курує додаванням атрибуту */
  @Input('appMultiplyAtributeSwitch') uploadDataType: string;

  /**
   * !!! Конструктор запускається перед роботою класу компоненти,
   * !!!  не робити операції з принятими данними
   * @param nativeElementWrapper обгортка елементу DOM
   */
  constructor(nativeElementWrapper: ElementRef) {
    this.nativeElement = nativeElementWrapper.nativeElement;
    console.log('Запуск конструктору директиви, тип данних:', this.uploadDataType, Date.now());
  }
   /**
    * при ініціалізації відбувається присвоєння чи видалення атрибуту
    */
   ngOnInit() {
    console.log('!!! Ініціалізація директиви, тип данних:', this.uploadDataType, Date.now());

    if (this.uploadDataType === 'userImage') {
      this.nativeElement.toggleAttribute('multiple');
    } else {
      this.nativeElement.removeAttribute('multiple');
    }
   }

}
