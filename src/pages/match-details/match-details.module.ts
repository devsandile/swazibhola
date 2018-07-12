import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchDetailsPage } from './match-details';

@NgModule({
  declarations: [
    MatchDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchDetailsPage),
  ],
})
export class MatchDetailsPageModule {}



// WEBPACK FOOTER //
// ./src/pages/match-details/match-details.module.ts