import { ElementRef, Injectable } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutclickService {

  private counter = 0;

  private outsideClick = new Subject<{id: number, event: Event}>();
  private directives: {id: number, element: ElementRef}[] = [];
  

  constructor() { 

    fromEvent(document, 'click').subscribe((event) =>{

      if(!event.target) return;

      this.directives.forEach((dir) => {

        if(!dir.element.nativeElement.contains(event.target as Node)) this.emitoutsideClick(dir.id, event);
      });
    });
  }

  get outsideClick$(): Observable<{id: number, event: Event}> {

    return this.outsideClick.asObservable();
  }

  emitoutsideClick(id: number, event: Event) {

    this.outsideClick.next({id, event});
  }

  registerDirective(element: ElementRef) {

    const id = this.counter++;
    this.directives.push({id, element});
    return id;
  }
}
