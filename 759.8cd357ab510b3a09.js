"use strict";(self.webpackChunkcafe_awake=self.webpackChunkcafe_awake||[]).push([[759],{4759:(q,d,c)=>{c.r(d),c.d(d,{LocationsModule:()=>$});var g=c(9808),p=c(522),O=c(2340),n=c(7587),u=c(4251),h=c(3009),f=c(4836),v=c(3633),_=c(8503);function x(o,i){if(1&o&&(n.TgZ(0,"div",10),n._uU(1),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Oqu(null==t.page?null:t.page.title)}}function M(o,i){if(1&o&&(n.TgZ(0,"h1"),n._uU(1),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Oqu(null==t.location?null:t.location.title)}}function P(o,i){if(1&o&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&o){const t=i.$implicit;n.xp6(1),n.Oqu(t)}}function L(o,i){if(1&o&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Oqu(t.location.phone)}}function I(o,i){if(1&o&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&o){const t=i.$implicit;n.xp6(1),n.Oqu(t)}}function Z(o,i){if(1&o&&(n.TgZ(0,"div",11),n._UZ(1,"img",12),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Q6J("src",t.location.image.url,n.LSH)}}function b(o,i){if(1&o&&(n.TgZ(0,"div",3),n.TgZ(1,"div",4),n.YNc(2,x,2,1,"div",5),n.YNc(3,M,2,1,"h1",6),n.TgZ(4,"div",7),n.YNc(5,P,2,1,"div",8),n.qZA(),n.TgZ(6,"div",7),n.YNc(7,L,2,1,"div",6),n.qZA(),n.TgZ(8,"div",7),n.YNc(9,I,2,1,"div",8),n.qZA(),n.qZA(),n.YNc(10,Z,2,1,"div",9),n.qZA()),2&o){const t=n.oxw();n.xp6(2),n.Q6J("ngIf",null==t.page?null:t.page.title),n.xp6(1),n.Q6J("ngIf",null==t.location?null:t.location.title),n.xp6(2),n.Q6J("ngForOf",t.location.addressLines),n.xp6(2),n.Q6J("ngIf",t.location.phone),n.xp6(2),n.Q6J("ngForOf",t.location.hoursLines),n.xp6(1),n.Q6J("ngIf",t.location.image)}}function T(o,i){if(1&o&&(n._UZ(0,"iframe",17),n.ALo(1,"safeResourceUrl")),2&o){const t=n.oxw(2);n.Q6J("src",n.lcZ(1,1,t.embedUrl),n.uOi)}}function y(o,i){if(1&o&&(n.TgZ(0,"div",13),n.TgZ(1,"div",14),n.YNc(2,T,2,3,"iframe",15),n.qZA(),n._UZ(3,"div",16),n.ALo(4,"safeHtml"),n.qZA()),2&o){const t=n.oxw();n.xp6(2),n.Q6J("ngIf",t.embedUrl),n.xp6(1),n.Q6J("innerHTML",n.lcZ(4,2,(null==t.location||null==t.location.text?null:t.location.text.html)||""),n.oJD)}}const w=function(){return[]};let A=(()=>{class o{constructor(t,e,s,a){this.route=t,this.graphcms=e,this.locale=s,this.seo=a,this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.locale.updates.subscribe(()=>this.refresh())),this.subscriptions.push(this.route.params.subscribe(()=>this.refresh()))}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}refresh(){var t,e,s,a,l,m;const r=this.locale.language;if(this.page=this.graphcms.getPage("LOCATIONS_ITEM",r),this.location=this.graphcms.getLocation(this.route.snapshot.params.id,r),this.embedUrl=void 0,null===(t=this.location)||void 0===t?void 0:t.geo){const C=`${null===(e=this.location)||void 0===e?void 0:e.geo.latitude},${null===(s=this.location)||void 0===s?void 0:s.geo.longitude}`;this.embedUrl=`https://www.google.com/maps/embed/v1/place?key=${O.N.googleApiKey}&q=${C}&center=${C}&zoom=16&language=${r}`}this.seo.updateSEO({title:null===(a=this.location)||void 0===a?void 0:a.title,image:null===(m=null===(l=this.location)||void 0===l?void 0:l.image)||void 0===m?void 0:m.url})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(p.gz),n.Y36(u.P),n.Y36(h.O),n.Y36(f.L))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-locations-item"]],decls:3,vars:4,consts:[["class","common-section location",4,"ngIf"],["class","common-section detail",4,"ngIf"],[3,"sections"],[1,"common-section","location"],[1,"content-container"],["class","subtitle",4,"ngIf"],[4,"ngIf"],[1,"address"],[4,"ngFor","ngForOf"],["class","img",4,"ngIf"],[1,"subtitle"],[1,"img"],[3,"src"],[1,"common-section","detail"],[1,"image-container"],["frameborder","0","style","border:0","referrerpolicy","no-referrer-when-downgrade","allowfullscreen","",3,"src",4,"ngIf"],[1,"content-container",3,"innerHTML"],["frameborder","0","referrerpolicy","no-referrer-when-downgrade","allowfullscreen","",2,"border","0",3,"src"]],template:function(t,e){1&t&&(n.YNc(0,b,11,6,"div",0),n.YNc(1,y,5,4,"div",1),n._UZ(2,"app-section-list",2)),2&t&&(n.Q6J("ngIf",e.location),n.xp6(1),n.Q6J("ngIf",(null==e.location?null:e.location.text)||e.embedUrl),n.xp6(1),n.Q6J("sections",(null==e.page?null:e.page.sections)||n.DdM(3,w)))},directives:[g.O5,g.sg,v.j],pipes:[_.t,_.z],styles:[".common-section[_ngcontent-%COMP%]{padding-top:64px;padding-bottom:64px}.common-section[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.common-section.location[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.common-section.location[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{text-align:center;width:540px}.common-section.location[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin-bottom:8px}.common-section.location[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-bottom:24px}.common-section.location[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]{margin-bottom:8px}.common-section.location[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{background-color:#fafafa;width:100%;height:410px;margin-top:60px}@media only screen and (max-width: 1100px){.common-section.location[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{width:100%}.common-section.location[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{height:240px}}.common-section.detail[_ngcontent-%COMP%]{display:flex}.common-section.detail[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.common-section.detail[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding-left:120px}.common-section.detail[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]     h1{font-size:24px}.common-section.detail[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{position:relative;filter:grayscale(100%);background-color:#fafafa;height:540px}.common-section.detail[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:100%}@media only screen and (max-width: 1100px){.common-section.detail[_ngcontent-%COMP%]{flex-direction:column-reverse}.common-section.detail[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%}.common-section.detail[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{padding-left:0;margin-bottom:32px}.common-section.detail[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{height:320px}}"]}),o})();var J=c(3621);const U=function(){return{showAllLinks:!0}};function Y(o,i){if(1&o&&n._UZ(0,"app-section",2),2&o){const t=n.oxw();n.Q6J("section",t.locations)("options",n.DdM(2,U))}}const Q=function(){return[]},N=[{path:"",component:(()=>{class o{constructor(t,e,s){this.graphcms=t,this.locale=e,this.seo=s,this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.locale.updates.subscribe(()=>this.refresh())),this.refresh()}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}refresh(){var t,e,s,a,l,m;this.page=this.graphcms.getPage("LOCATIONS",this.locale.language),this.locations={title:null===(t=this.page)||void 0===t?void 0:t.title,type:"LOCATIONS",links:(null===(e=this.graphcms.getLocations(this.locale.language))||void 0===e?void 0:e.map(r=>({location:r})))||[]},this.seo.updateSEO({title:null===(s=this.page)||void 0===s?void 0:s.title,description:null===(a=this.page)||void 0===a?void 0:a.seoDescription,image:null===(m=null===(l=this.page)||void 0===l?void 0:l.seoImage)||void 0===m?void 0:m.url})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(u.P),n.Y36(h.O),n.Y36(f.L))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-locations"]],decls:2,vars:3,consts:[[3,"section","options",4,"ngIf"],[3,"sections"],[3,"section","options"]],template:function(t,e){1&t&&(n.YNc(0,Y,1,3,"app-section",0),n._UZ(1,"app-section-list",1)),2&t&&(n.Q6J("ngIf",e.locations),n.xp6(1),n.Q6J("sections",(null==e.page?null:e.page.sections)||n.DdM(2,Q)))},directives:[g.O5,J.e,v.j],styles:["app-section[_ngcontent-%COMP%]     .locations h1{margin-bottom:32px}"]}),o})()},{path:":id",component:A}];let F=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[p.Bz.forChild(N)],p.Bz]}),o})();var S=c(8082);let $=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[g.ez,F,S.m]]}),o})()}}]);