import { Directive, OnInit, OnDestroy, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimeCounter]'
})
export class TimeCounterDirective implements OnInit, OnDestroy {
  private isActive: boolean;
  private timeLeft: number;
  private endDate: Date;

  /**
   * вхідні данні про час завершення змагання
   */
  @Input() set appTimeCounter(endDate: string) {
    this.endDate = new Date(endDate);
  }

  /**
   * вхідні данні про стан змагання
   */
  @Input() set appTimeCounterIsActive(isActive: boolean) {
    this.isActive = isActive;
  }
  private countdown;

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
    ) { }

  // оскількт на сервері всі події закінчились, змінено час для перевірки функціоналу
  ngOnInit(): void {
    const count = this.container.createEmbeddedView(this.template);
    if (this.comparator() || !this.isActive) {
      count.rootNodes[0].textContent = 'Closed';
    } else {
      count.rootNodes[0].textContent = this.timeFormat();
      /**
       * встановлення таймеру
       */
      this.countdown = setInterval( () => {
        if (!this.comparator()) {
          count.rootNodes[0].textContent = this.timeFormat();
        } else {
          return clearInterval(this.countdown);
        }
      }, 1000);
    }
  }
  /**
   * метод що обчислює час до завершення та  визначає стан змагання
   * (використано оскільки дані на сервері застарілі)
   */
  comparator(): boolean {
    this.timeLeft = this.endDate.getTime() + (6.48e+9) - Date.now();
    if (this.timeLeft <= 0) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * метод форматує час у відповідності до потрібного інтервалу
   */
  timeFormat() {
    if (this.timeLeft > (8.64e+7)) {
      return `${Math.floor(this.timeLeft / (8.64e+7))} days`;
    } else {
      return `${Math.floor(this.timeLeft / (3.6e+6))}:${Math.floor(this.timeLeft % (3.6e+6) / (6e+4))}:${Math.floor(this.timeLeft % (6e+4) / 1000)}`;
    }
  }

  /**
   * при завершені роботі директиви, таймер зупиняється
   */
  ngOnDestroy() {
    clearInterval(this.countdown);

  }
}
