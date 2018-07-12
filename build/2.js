webpackJsonp([2],{

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNewsDetailsPageModule", function() { return TopNewsDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__top_news_details__ = __webpack_require__(444);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TopNewsDetailsPageModule = (function () {
    function TopNewsDetailsPageModule() {
    }
    TopNewsDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__top_news_details__["a" /* TopNewsDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__top_news_details__["a" /* TopNewsDetailsPage */]),
            ],
        })
    ], TopNewsDetailsPageModule);
    return TopNewsDetailsPageModule;
}());

//# sourceMappingURL=top-news-details.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNewsDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopNewsDetailsPage = (function () {
    function TopNewsDetailsPage(navCtrl, global) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.clickLike = false;
        this.numLike = 200;
    }
    TopNewsDetailsPage.prototype.like = function ($event) {
        $event.stopPropagation();
        if (this.clickLike != true) {
            this.numLike = this.numLike + 1;
            this.clickLike = true;
        }
        else {
            this.numLike = this.numLike - 1;
            this.clickLike = false;
        }
    };
    TopNewsDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-top-news-details',template:/*ion-inline-start:"C:\Users\Rhino\Documents\IONICAPPS\demoSoccer\src\pages\top-news-details\top-news-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu" ></ion-icon>\n    </button>\n    <ion-title>Top News</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only  (click)="global.callSearch($event)">\n        <ion-icon name="md-search"></ion-icon>\n      </button>\n      <button ion-button icon-only navPush="NotificationPage">\n        <ion-icon name="md-notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <img src="assets/imgs/mtn_awards.jpg"/>\n    <ion-card-content>  \n      <ion-grid no-padding class="gridFooter">\n        <ion-row>  \n          <ion-col col padding-right> \n            <p ion-text color="color4">4 HOURS AGO</p>\n          </ion-col>\n          <!-- users like number -->\n          <ion-col col-auto padding-right>\n            <ion-item (click)="like($event)">\n              <ion-icon  item-left color="color2" [name]="clickLike ? \'ios-heart\' : \'ios-heart-outline\'" ></ion-icon>\n              <p ion-text color="color4">{{numLike}}</p>\n            </ion-item>\n          </ion-col>\n\n          <!-- user Comment number -->\n          <ion-col col-auto>\n              <ion-item>\n                <ion-icon name="md-text" color="color2" item-left></ion-icon>\n                <p ion-text color="color4">160</p>\n              </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-card-title>\n        MTN PREMIER LEAGUE PLAYER OF THE MONTH AWARDS\n      </ion-card-title>\n      <p>\n        MTN in partnership with the Premier League of Swaziland today awarded outstanding players of the month ending 28 February 2018 and March 2018 at Sigwaca house. The prize money was E5 000 for premier league and E1 500 for the MTN first division respectively.\n        Winners for the month ending on February 28 are Phiwa Dlamini of Young Buffaloes on the premier league side and Lwazi Mdluli of Hlathikhulu Tycoon, while Thabiso Mokenkoane of Mbabane Highlanders and Bhekisisa Vilane of Milling Hot Spurs were awarded the prize of march player of the month.\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <ion-list class="commentsList" margin-top>   \n    <ion-list-header>\n      Comment        \n    </ion-list-header>\n    <!-- comment -->\n    <ion-item>\n      <ion-avatar item-left>\n        <img src="assets/imgs/player2.png">\n      </ion-avatar>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-auto>\n            <h5 ion-text color="dark">Wendy Verdades</h5>   \n          </ion-col>\n          <ion-col col padding-left>\n            <p ion-text color="dark">1 min ago</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <p ion-text color="dark">\n        It is a long established fact that a reader will be distracted \n      </p>\n    </ion-item>\n\n    <!-- add comment -->\n    <ion-item margin-top> \n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col>\n            <ion-item class="writComment">\n              <ion-textarea placeholder="Write a Comment"></ion-textarea>\n            </ion-item>\n          </ion-col>\n          <ion-col col-auto padding-left>\n            <button ion-button color="color1" class="addBtn">\n              Add\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rhino\Documents\IONICAPPS\demoSoccer\src\pages\top-news-details\top-news-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* Global */]])
    ], TopNewsDetailsPage);
    return TopNewsDetailsPage;
}());

//# sourceMappingURL=top-news-details.js.map

/***/ })

});
//# sourceMappingURL=2.js.map