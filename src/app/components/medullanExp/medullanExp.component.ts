import { Component, trigger, animate, state, style, keyframes, transition } from '@angular/core';

@Component({
  selector: 'medullan-experience',
  templateUrl: './medullanExp.component.html',
  styleUrls: ['./medullanExp.component.css'],
  animations: [
    trigger('requestSkills', [
      state('inactive', style({
        transform: 'scale(0)'
      })),
      state('active', style({
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('100ms ease-out  '))
    ]),
    trigger('displayReturnedSkills', [
      state('inactive', style({
        transform: 'translateY(900%)'
      })),
      state('active', style({
        transform: 'translateY(0)'
      })),
      transition('inactive => active', animate('900ms ease-in')),
      transition('active => inactive', animate('900ms ease-out'))
    ]),
    trigger('activateExperience', [
      state('inactive', style({
        opacity: .25,
        transform: 'scale(1)'
      })),
      state('active', style({
        opacity: 1,
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out  '))
    ])
  ]
})
export class MedullanExpComponent {
  state: string = 'inactive';

  toggleReturn() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

}
