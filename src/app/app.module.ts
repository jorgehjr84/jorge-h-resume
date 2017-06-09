import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { JorgeHernandezComponent } from './components/jorgeHernandez/jorgeHernandez.component';
import { ContactInfoComponent } from './components/contactInfo/contactInfo.component';
import { MedullanExpComponent } from './components/medullanExp/medullanExp.component';
import { FreelanceExpComponent } from './components/freelanceExp/freelanceExp.component';
import { LavExpComponent } from './components/lavExp/lavExp.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillSetsComponent } from './components/skillSetsBox/skillSetsBox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JorgeHernandezComponent,
    ContactInfoComponent,
    MedullanExpComponent,
    FreelanceExpComponent,
    LavExpComponent,
    SkillsComponent,
    SkillSetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
