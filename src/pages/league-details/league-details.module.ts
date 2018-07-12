import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeagueDetailsPage } from './league-details';

@NgModule({
  declarations: [
    LeagueDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LeagueDetailsPage),
  ],
})
export class LeagueDetailsPageModule {}



// WEBPACK FOOTER //
// ./src/pages/league-details/league-details.module.ts