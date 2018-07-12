webpackJsonp([1],{

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNewsPageModule", function() { return TopNewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__top_news__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TopNewsPageModule = (function () {
    function TopNewsPageModule() {
    }
    TopNewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__top_news__["a" /* TopNewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__top_news__["a" /* TopNewsPage */]),
            ],
        })
    ], TopNewsPageModule);
    return TopNewsPageModule;
}());

//# sourceMappingURL=top-news.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNewsPage; });
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



var TopNewsPage = (function () {
    function TopNewsPage(navCtrl, global) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.lastNews = [
            { img: 'assets/imgs/news2.png', title: 'Real Madrid want to win Club World Cup', numLike: 200, subTitle: 'is simply dummy text of the printing and typesetting industry.' },
            { img: 'assets/imgs/news1.png', title: 'Real Madrid want to win Club World Cup', numLike: 200, subTitle: 'is simply dummy text of the printing and typesetting industry.' },
            { img: 'assets/imgs/news3.png', title: 'Real Madrid want to win Club World Cup', numLike: 200, subTitle: 'is simply dummy text of the printing and typesetting industry.' },
            { img: 'assets/imgs/news2.png', title: 'Real Madrid want to win Club World Cup', numLike: 200, subTitle: 'is simply dummy text of the printing and typesetting industry.' },
            { img: 'assets/imgs/news1.png', title: 'Real Madrid want to win Club World Cup', numLike: 200, subTitle: 'is simply dummy text of the printing and typesetting industry.' },
            { img: 'assets/imgs/news3.png', title: 'Real Madrid want to win Club World Cup', numLike: 200, subTitle: 'is simply dummy text of the printing and typesetting industry.' }
        ];
    }
    // public clickLike=false;
    TopNewsPage.prototype.like = function ($event, item) {
        $event.stopPropagation();
        console.log(item.numLike);
        if (item.clickLike != true) {
            item.numLike = item.numLike + 1;
            item.clickLike = true;
        }
        else {
            item.numLike = item.numLike - 1;
            item.clickLike = false;
        }
    };
    TopNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-top-news',template:/*ion-inline-start:"C:\Users\Rhino\Documents\IONICAPPS\demoSoccer\src\pages\top-news\top-news.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu" ></ion-icon>\n    </button>\n    <ion-title>Top News</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only  (click)="global.callSearch($event)">\n        <ion-icon name="md-search"></ion-icon>\n      </button>\n      <button ion-button icon-only navPush="NotificationPage">\n        <ion-icon name="md-notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card class="newsCard" *ngFor="let item of lastNews" navPush="TopNewsDetailsPage">\n    <!-- if images in this slide equaled in height please remove class="imgResponsive" from img Tag -->\n    <img class="imgResponsive" src="{{item.img}}"/>\n    <div class="container" text-left>\n      <h4 ion-text color="light">{{item.title}}</h4>\n      <p ion-text color="light">{{item.subTitle}}</p>\n\n      <ion-grid no-padding class="gridFooter">\n        <ion-row>\n          <ion-col col padding-right>\n            <p ion-text color="light">4 HOURS AGO</p>\n          </ion-col>\n          <!-- users like number -->\n          <ion-col col-auto padding-right>\n            <ion-item (click)="like($event,item)">\n              <ion-icon  item-left color="color2" [name]="item.clickLike ? \'ios-heart\' : \'ios-heart-outline\'" ></ion-icon>\n              <p ion-text color="light">{{item.numLike}}</p>\n            </ion-item>\n          </ion-col>  \n\n          <!-- user Comment number -->\n          <ion-col col-auto>\n            <ion-item>\n              <ion-icon name="md-text" color="color2" item-left></ion-icon>\n              <p ion-text color="light">160</p>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rhino\Documents\IONICAPPS\demoSoccer\src\pages\top-news\top-news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* Global */]])
    ], TopNewsPage);
    return TopNewsPage;
}());

//# sourceMappingURL=top-news.js.map

/***/ })

});
//# sourceMappingURL=1.js.map