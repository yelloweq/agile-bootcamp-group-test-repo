(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[1],{117:function(e,t,n){},118:function(e,t,n){},120:function(e,t,n){},128:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(39),o=n.n(c),s=n(11),i=n.n(s),j=n(16),d=n(7),l=n(8),h=n(9),b=n(10),u=n(4),p=(n(89),n(71)),x=n.n(p),O=function(){var e=Object(j.a)(i.a.mark((function e(){var t,n,r,a,c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://covid19.mathdro.id/api");case 3:return t=e.sent,n=t.data,r=n.confirmed,a=n.recovered,c=n.deaths,o=n.lastUpdate,s={confirmed:r,recovered:a,deaths:c,lastUpdate:o},e.abrupt("return",s);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),f=(n(107),n(108),n(109),n(110),n(111),n(112),n(113),n(114),n(115),n(116),n(117),n(118),n(3)),m=function(){return Object(f.jsxs)(u.k,{className:"ion-page",id:"main-content",children:[Object(f.jsx)(u.i,{children:Object(f.jsx)(u.r,{mode:"ios",children:Object(f.jsx)(u.q,{children:"Welcome!"})})}),Object(f.jsx)(u.h,{className:"ion-padding",id:"main-content",children:Object(f.jsxs)(u.d,{className:"info-card-content",children:[Object(f.jsx)(u.f,{children:Object(f.jsx)(u.g,{className:"info-box-title",children:"Amazing Canoes"})}),Object(f.jsxs)(u.e,{className:"ion-text-wrap",children:[Object(f.jsx)("p",{children:"Amazing Canoes consists of a small developers team that aim to rise awareness on the rising number of Coronavirus cases around the world."}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{children:" Here you can find reliable data on Covid-19 and some advice on how to protect yourself and the people around you. Our goal is to help and share information to the public in order to highlight the danger of this pandamic and save lives.  "})]})]})})]})},y=(n(120),function(){return Object(f.jsxs)(u.k,{children:[Object(f.jsx)(u.i,{children:Object(f.jsx)(u.r,{mode:"ios",children:Object(f.jsx)(u.q,{children:"Graph page"})})}),Object(f.jsx)(u.h,{})]})}),v=n(22),_=n(192),g=n(195),k=n(194),w=n(196),C=n(33),N=n.n(C),D=(n(121),n(49)),S=n.n(D),E=n(50),U=n.n(E),B=function(e){var t=e.props.props,n=t.confirmed,r=t.deaths,a=t.recovered,c=t.lastUpdate;e.update;return n?Object(f.jsx)("div",{className:N.a.container,children:Object(f.jsxs)(_.a,{container:!0,spacing:3,justify:"center",children:[Object(f.jsx)(_.a,{item:!0,component:g.a,xs:12,md:3,className:U()(N.a.card,N.a.infected),children:Object(f.jsxs)(k.a,{children:[Object(f.jsx)(w.a,{align:"center",color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(f.jsx)(w.a,{align:"center",variant:"h5",children:Object(f.jsx)(S.a,{start:0,end:n.value,duration:2.5,separator:",",redraw:!0,useEasing:!0})}),Object(f.jsx)(w.a,{align:"center",color:"textSecondary",children:new Date(c).toDateString()})]})}),Object(f.jsx)(_.a,{item:!0,component:g.a,xs:12,md:3,className:U()(N.a.card,N.a.recovered),children:Object(f.jsxs)(k.a,{children:[Object(f.jsx)(w.a,{align:"center",color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(f.jsx)(w.a,{align:"center",variant:"h5",children:Object(f.jsx)(S.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(f.jsx)(w.a,{align:"center",color:"textSecondary",children:new Date(c).toDateString()})]})}),Object(f.jsx)(_.a,{item:!0,component:g.a,xs:12,md:3,className:U()(N.a.card,N.a.deaths),children:Object(f.jsxs)(k.a,{children:[Object(f.jsx)(w.a,{align:"center",color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(f.jsx)(w.a,{align:"center",variant:"h5",children:Object(f.jsx)(S.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(f.jsx)(w.a,{align:"center",color:"textSecondary",children:new Date(c).toDateString()})]})})]})}):Object(f.jsx)("div",{className:"loading-screen",children:Object(f.jsx)("h1",{children:"Loading data..."})})},M=n(14),A=(n(128),function(e){var t=Object(r.useState)(void 0),n=Object(v.a)(t,2),a=n[0],c=n[1];return Object(f.jsxs)(u.k,{children:[Object(f.jsxs)(u.r,{mode:"ios",children:[Object(f.jsx)(u.c,{slot:"end",children:Object(f.jsx)(u.b,{onClick:function(){O().then((function(e){c(e),console.log(a)}))},children:Object(f.jsx)(u.j,{slot:"icon-only",icon:M.l})})}),Object(f.jsx)(u.q,{children:"Global Statistics"})]}),Object(f.jsx)(B,{props:e,update:a})]})}),q=n(76),L=n(26),z=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={data:{}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,console.log(t),this.setState({data:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return Object(f.jsx)(u.a,{children:Object(f.jsx)(q.a,{children:Object(f.jsx)(u.h,{children:Object(f.jsxs)(u.p,{children:[Object(f.jsxs)(u.m,{children:[Object(f.jsx)(L.b,{path:"/home",component:m,exact:!0}),Object(f.jsx)(L.b,{path:"/graph",component:y,exact:!0}),Object(f.jsx)(L.b,{path:"/stats",exact:!0,children:Object(f.jsx)(A,{props:e})}),Object(f.jsx)(L.a,{from:"/",to:"/home",exact:!0})]}),Object(f.jsxs)(u.n,{slot:"bottom",children:[Object(f.jsx)(u.o,{tab:"graph",href:"/graph",children:Object(f.jsx)(u.j,{icon:M.q})}),Object(f.jsx)(u.o,{tab:"home",href:"/home",children:Object(f.jsx)(u.j,{icon:M.i})}),Object(f.jsx)(u.o,{tab:"stats",href:"/stats",children:Object(f.jsx)(u.j,{icon:M.h})})]})]})})})})}}]),n}(a.a.Component);o.a.render(Object(f.jsx)(z,{}),document.getElementById("root"))},33:function(e,t,n){e.exports={container:"Cards_container__M_a03",card:"Cards_card___Bhnm",infected:"Cards_infected__1BsVo",recovered:"Cards_recovered__2DrEf",deaths:"Cards_deaths__2p5ba","loading-screen":"Cards_loading-screen__2ZLoz"}},86:function(e,t,n){var r={"./ion-action-sheet.entry.js":[134,5],"./ion-alert.entry.js":[135,6],"./ion-app_8.entry.js":[136,7],"./ion-avatar_3.entry.js":[137,17],"./ion-back-button.entry.js":[138,18],"./ion-backdrop.entry.js":[139,43],"./ion-button_2.entry.js":[140,19],"./ion-card_5.entry.js":[141,20],"./ion-checkbox.entry.js":[142,21],"./ion-chip.entry.js":[143,22],"./ion-col_3.entry.js":[144,44],"./ion-datetime_3.entry.js":[145,10],"./ion-fab_3.entry.js":[146,23],"./ion-img.entry.js":[147,45],"./ion-infinite-scroll_2.entry.js":[148,46],"./ion-input.entry.js":[149,24],"./ion-item-option_3.entry.js":[150,25],"./ion-item_8.entry.js":[151,26],"./ion-loading.entry.js":[152,27],"./ion-menu_3.entry.js":[153,28],"./ion-modal.entry.js":[154,8],"./ion-nav_2.entry.js":[155,14],"./ion-popover.entry.js":[156,9],"./ion-progress-bar.entry.js":[157,29],"./ion-radio_2.entry.js":[158,30],"./ion-range.entry.js":[159,31],"./ion-refresher_2.entry.js":[160,11],"./ion-reorder_2.entry.js":[161,16],"./ion-ripple-effect.entry.js":[162,47],"./ion-route_4.entry.js":[163,32],"./ion-searchbar.entry.js":[164,33],"./ion-segment_2.entry.js":[165,34],"./ion-select_3.entry.js":[166,35],"./ion-slide_2.entry.js":[167,48],"./ion-spinner.entry.js":[168,13],"./ion-split-pane.entry.js":[169,49],"./ion-tab-bar_2.entry.js":[170,36],"./ion-tab_2.entry.js":[171,15],"./ion-text.entry.js":[172,37],"./ion-textarea.entry.js":[173,38],"./ion-toast.entry.js":[174,39],"./ion-toggle.entry.js":[175,12],"./ion-virtual-scroll.entry.js":[176,50]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=86,e.exports=a},88:function(e,t,n){var r={"./ion-icon.entry.js":[177,57]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=88,e.exports=a},89:function(e,t,n){e.exports={container:"App_container__j4TWM",tabs:"App_tabs__3kMn-"}}},[[132,3,4]]]);
//# sourceMappingURL=main.62a293c1.chunk.js.map