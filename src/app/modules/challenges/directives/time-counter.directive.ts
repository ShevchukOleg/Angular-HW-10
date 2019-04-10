import { Directive, OnInit, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimeCounter]'
})
export class TimeCounterDirective implements OnInit {
  private isActive: boolean;
  private timeLeft: number;
  private endDate: Date;
  @Input() set appTimeCounter(endDate: string) {
    this.endDate = new Date(endDate);
  }

  @Input() set appTimeCounterIsActive(isActive: boolean) {
    this.isActive = isActive;
  }
  private countdown;

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
    ) { }

  // оскількт на сервері всі події закінчились, вимушено змінюю поточну
  ngOnInit(): void {
    const count = this.container.createEmbeddedView(this.template);
    if (this.comparator() || !this.isActive) {
      count.rootNodes[0].textContent = 'Closed';
    } else {
      count.rootNodes[0].textContent = this.timeFormat();
      this.countdown = setInterval( () => {
        if (!this.comparator()) {
          count.rootNodes[0].textContent = this.timeFormat();
        } else {
          return clearInterval(this.countdown);
        }
      }, 1000);
    }
  }

  comparator() {
    this.timeLeft = this.endDate.getTime() + (6.48e+9) - Date.now();
    if (this.timeLeft <= 0) {
      return true;
    } else {
      return false;
    }
  }

  timeFormat() {
    if (this.timeLeft > (8.64e+7)) {
      return `${Math.floor(this.timeLeft / (8.64e+7))} days`;
    } else {
      return `${Math.floor(this.timeLeft / (3.6e+6))}:${Math.floor(this.timeLeft % (3.6e+6) / (6e+4))}:${Math.floor(this.timeLeft % (6e+4) / 1000)}`;
    }
  }


}
