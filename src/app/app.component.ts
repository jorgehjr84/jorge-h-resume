import { Component } from '@angular/core';
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

})
export class AppComponent {
  title = "Jorge Hernandez's Sequence Diagram Resume";
}
