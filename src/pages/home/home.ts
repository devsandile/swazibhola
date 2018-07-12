import { Component } from '@angular/core';
import { IonicPage, NavController,  } from 'ionic-angular';
import { Global } from '../../providers/global';
@IonicPage()
@Component({  
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController,private global:Global) {
  }

  lastNews=[
    {img:'assets/imgs/ingwenyama.jpg',title:'WISHES INGWENYAMA PARTICIPANTS ALL THE BEST',subTitle:'His Majesty the King Mswati 111 through Prince Hlangabeza on a kit presentation held at Nkhanini, Lobamba'},
    {img:'assets/imgs/news1.png',title:'Real Madrid want to win Club World Cup',subTitle:'is simply dummy text of the printing and typesetting industry.'},
    {img:'assets/imgs/news3.png',title:'Real Madrid want to win Club World Cup',subTitle:'is simply dummy text of the printing and typesetting industry.'}
  ]

  matches=[
    {firstTeamImg:'assets/imgs/teams/mbabane_swallows.png',firstTeamName:'Mbabane Swallows', time:'19:30',secondTeamImg:'assets/imgs/teams/young_buffaloes.png',secondTeamName:'Young Buffaloes'},
    {firstTeamImg:'assets/imgs/teams/manzini_wanderes.png',firstTeamName:'Manzini Wanderes', time:'22:30',secondTeamImg:'assets/imgs/teams/manzini_sundowns.png',secondTeamName:'Manzini Sundowns'},
  ]

  clickLike=false;  
  numLike=200;
  like($event){
    $event.stopPropagation();
    if(this.clickLike!=true){
      this.numLike=this.numLike+1;
      this.clickLike=true;
    }
    else{
      this.numLike=this.numLike - 1;
      this.clickLike=false;
    }
  }
}   
       


// WEBPACK FOOTER //
// ./src/pages/home/home.ts