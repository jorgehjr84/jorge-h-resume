import { Component, trigger, animate, state, style, keyframes, transition } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { ContactInfoComponent } from './components/contactInfo/contactInfo.component';
import { JorgeHernandezComponent } from './components/jorgeHernandez/jorgeHernandez.component';
import { MedullanExpComponent } from './components/medullanExp/medullanExp.component';
import { FreelanceExpComponent } from './components/freelanceExp/freelanceExp.component';
import { LavExpComponent } from './components/lavExp/lavExp.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
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
    ]),
    trigger('requestSkills', [
      state('inactive', style({
        transform: 'scale(0)'
      })),
      state('active', style({
       transform: 'scale(.378)'

      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('100ms ease-out  '))
    ]),
    trigger('displayReturnedSkills', [
      state('inactive', style({
        transform: 'translateY(-600%)'
      })),
      state('active', style({
        transform: 'translateY(0)'
      })),
      transition('inactive => active', animate('900ms ease-in')),
      transition('active => inactive', animate('900ms ease-out'))
    ])
  ]

})
export class AppComponent {
  title = "Jorge Hernandez's Sequence Diagram Resume";
  
    state1: string = 'inactive';
    state2: string = 'inactive';
    state3: string = 'inactive';

  toggleReturn(event) {
    console.log(event)
    if(event == 1) {
      this.state1 = (this.state1 === 'inactive' ? 'active' : 'inactive');
      this.state2 = 'inactive';
      this.state3 = 'inactive';
    }else if (event == 2) {
      this.state2 = (this.state2 === 'inactive' ? 'active' : 'inactive');
      this.state1 = 'inactive';
      this.state3 = 'inactive';
    } else {
      this.state3 = (this.state3 === 'inactive' ? 'active' : 'inactive');
      this.state1 = 'inactive';
      this.state2 = 'inactive';
    }  
  }
}


// @Component({
//   selector: 'medullan-experience',
//   templateUrl: './medullanExp.component.html',
//   styleUrls: ['./medullanExp.component.css'],
//   animations: [
//     trigger('requestSkills', [
//       state('inactive', style({
//         transform: 'scale(0)'
//       })),
//       state('active', style({
//         transform: 'scale(1)'
//       })),
//       transition('inactive => active', animate('200ms ease-in')),
//       transition('active => inactive', animate('100ms ease-out  '))
//     ]),
//     trigger('displayReturnedSkills', [
//       state('inactive', style({
//         transform: 'translateY(900%)'
//       })),
//       state('active', style({
//         transform: 'translateY(0)'
//       })),
//       transition('inactive => active', animate('900ms ease-in')),
//       transition('active => inactive', animate('900ms ease-out'))
//     ]),
//     trigger('activateExperience', [
//       state('inactive', style({
//         opacity: .25,
//         transform: 'scale(1)'
//       })),
//       state('active', style({
//         opacity: 1,
//         transform: 'scale(1.1)'
//       })),
//       transition('inactive => active', animate('200ms ease-in')),
//       transition('active => inactive', animate('200ms ease-out  '))
//     ])
//   ]
// })
// export class MedullanExpComponent {
//   state: string = 'inactive';

//   toggleReturn() {
//     this.state = (this.state === 'inactive' ? 'active' : 'inactive');
//   }

// }
