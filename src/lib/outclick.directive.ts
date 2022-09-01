import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { OutclickService } from './outclick.service';

@Directive({
  selector: '[outclick]'
})
export class OutclickDirective implements OnInit, OnDestroy {

  id!: number;
  subs = new Subscription();

  @Output('out-click') outClick = new EventEmitter<Event>();

  constructor(private el: ElementRef, private outClickService: OutclickService) {
  }

  ngOnInit(): void {
    this.id = this.outClickService.registerDirective(this.el);

    this.subs.add(
      this.outClickService.outsideClick$.subscribe((data) => {

        if(data.id === this.id) this.emitEvent(data.event);
      })
    )
  }

  ngOnDestroy(): void {
      
    this.subs.unsubscribe();
  }

  emitEvent(event: Event) {

    this.outClick.emit(event);
  }

}
