import { Component, trigger, animate, state, style, keyframes, transition } from '@angular/core';

@Component({
  selector: 'medullan-experience',
  templateUrl: './medullanExp.component.html',
  styleUrls: ['./medullanExp.component.css']
})
export class MedullanExpComponent {
  state: string = 'inactive';

  toggleReturn() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

}
