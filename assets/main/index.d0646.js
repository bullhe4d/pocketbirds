window.__require=function t(e,o,n){function r(i,p){if(!o[i]){if(!e[i]){var s=i.split("/");if(s=s[s.length-1],!e[s]){var a="function"==typeof __require&&__require;if(!p&&a)return a(s,!0);if(c)return c(s,!0);throw new Error("Cannot find module '"+i+"'")}i=s}var u=o[i]={exports:{}};e[i][0].call(u.exports,function(t){return r(e[i][1][t]||t)},u,u.exports,t,e,o,n)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({bgm:[function(t,e,o){"use strict";cc._RF.push(e,"8db3fb4XLxMBYiPoNxvQZ+I","bgm");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.audio=null,e}return r(e,t),e.prototype.onLoad=function(){cc.audioEngine.play(this.audio,!1,1)},c([s(cc.AudioClip)],e.prototype,"audio",void 0),c([p],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],birdAtlas:[function(t,e,o){"use strict";cc._RF.push(e,"2ca8feUFppAGq2CO9n9N8yE","birdAtlas");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.atlas=null,e.frames=[],e.sprite=null,e.index=0,e.interval=.2,e}return r(e,t),e.prototype.onLoad=function(){this.sprite=this.getComponent(cc.Sprite),null!=this.atlas&&(this.frames=this.atlas.getSpriteFrames())},e.prototype.start=function(){this.schedule(this.ontimer,this.interval)},e.prototype.ontimer=function(){this.index>this.frames.length-1&&(this.index=0),0!=this.frames.length&&(this.sprite.spriteFrame=this.frames[this.index],this.index++)},e.prototype.onDestroy=function(){this.unschedule(this.ontimer)},c([s([cc.SpriteAtlas])],e.prototype,"atlas",void 0),c([p],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],bird:[function(t,e,o){"use strict";cc._RF.push(e,"9b130A18aFKwY76Wz/uDCiZ","bird");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.audio=null,e}return r(e,t),e.prototype.start=function(){},e.prototype.nodeBox=function(){return this.node.getBoundingBoxToWorld()},e.prototype.onLoad=function(){var t=cc.director.getCollisionManager();t.enabled=!0,t.enabledDebugDraw=!1},e.prototype.onCollisionEnter=function(){this.node.removeFromParent();var t=cc.find("Canvas/score/number").getComponent("score");cc.audioEngine.play(this.audio,!1,1),t.addScore(10)},c([s(cc.AudioClip)],e.prototype,"audio",void 0),c([p],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],landing:[function(t,e,o){"use strict";cc._RF.push(e,"6aa36eru4tDrqOCGK5RmMuv","landing");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.audio=null,e}return r(e,t),e.prototype.onLoad=function(){this.node.on("touchstart",this.btn,this),this.node.on("touchend",this.gotoMain,this),cc.resources.loadDir("music",function(){})},e.prototype.start=function(){},e.prototype.gotoMain=function(){cc.director.loadScene("main")},e.prototype.btn=function(){cc.audioEngine.play(this.audio,!1,1)},c([s(cc.AudioClip)],e.prototype,"audio",void 0),c([p],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],life:[function(t,e,o){"use strict";cc._RF.push(e,"d4624+sDh5O+7uJPbityXJ/","life");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.icon=null,e.life=3,e}return r(e,t),e.prototype.start=function(){this.life=3,this.heart()},e.prototype.subHeart=function(){console.log(cc.find("Canvas/life").children),cc.find("Canvas/life").getChildByName("heart"+this.life).destroy(),this.life=this.life-1,this.life<1&&(cc.find("Canvas/mask").active=!0,cc.director.pause())},e.prototype.heart=function(){var t=1;for(t=1;t<=this.life;t++){cc.log(t);var e=new cc.Node("heart"+t);this.node.addChild(e),e.addComponent(cc.Sprite).spriteFrame=this.icon,console.log(cc.v3(0,0,0)),e.setPosition(cc.v3(0+60*t-80,0,0)),e.parent=cc.find("Canvas/life"),e.width=57,e.height=51}},c([s(cc.SpriteFrame)],e.prototype,"icon",void 0),c([s],e.prototype,"life",void 0),c([p],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],main:[function(t,e,o){"use strict";cc._RF.push(e,"974d122UtdM+qXr2bNyqZZk","main");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bird=null,e.shit=null,e.audio=null,e.parentNode=null,e}return r(e,t),e.prototype.onLoad=function(){},e.prototype.start=function(){this.parentNode=cc.find("Canvas/birdandshit"),this.NewBird(),this.schedule(this.NewBird,5),this.schedule(this.NewShit,8),cc.audioEngine.play(this.audio,!1,.3)},e.prototype.NewBird=function(){var t=cc.instantiate(this.bird);this.node.addChild(t),t.setPosition(this.getNewRandomPosition()),console.log(this.parentNode),t.parent=this.parentNode,cc.tween(t).to(10,{position:cc.v3(t.getPosition().x,-cc.view.getVisibleSize().height/2-20,0)}).call(function(){cc.find("Canvas/life").getComponent("life").subHeart(),t.destroy()}).start()},e.prototype.NewShit=function(){var t=cc.instantiate(this.shit);this.node.addChild(t),t.setPosition(this.getNewRandomPosition()),t.parent=this.parentNode,cc.tween(t).to(8,{position:cc.v3(t.getPosition().x,-cc.view.getVisibleSize().height/2-20,0)}).call(function(){t.destroy()}).start()},e.prototype.getNewRandomPosition=function(){var t=400*Math.random()-180,e=cc.view.getVisibleSize().height/2-100;return cc.log("\u7269\u54c1\u521b\u5efa\u5750\u6807"+t+"  "+e),cc.v3(t,e,0)},e.prototype.update=function(){},c([s(cc.Prefab)],e.prototype,"bird",void 0),c([s(cc.Prefab)],e.prototype,"shit",void 0),c([s(cc.AudioClip)],e.prototype,"audio",void 0),c([p],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],move:[function(t,e,o){"use strict";cc._RF.push(e,"dd154ue7O1Ob4YJQDmyzdIR","move");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return r(e,t),e.prototype.onLoad=function(){this.node.on("touchmove",this.movePlayer,this)},e.prototype.start=function(){},e.prototype.movePlayer=function(t){var e=t.getDelta(),o=cc.find("Canvas/player"),n=o.getPosition();e.x>.1?o.setScale(-1,1):o.setScale(1,1),o.setPosition(cc.v3(n.x+e.x,n.y,0)),t.stopPropagation()},c([s(cc.Label)],e.prototype,"label",void 0),c([s],e.prototype,"text",void 0),c([p],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],restart:[function(t,e,o){"use strict";cc._RF.push(e,"ae361WE+cBKepcD8ybd9PgP","restart");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.onLoad=function(){this.node.on("touchstart",this.startBtn,this)},e.prototype.start=function(){},e.prototype.startBtn=function(){cc.find("Canvas/birdandshit").removeAllChildren(),cc.find("Canvas/mask").active=!1,cc.find("Canvas/life").getComponent("life").start(),cc.director.resume()},c([p],e)}(cc.Component));o.default=s,cc._RF.pop()},{}],score:[function(t,e,o){"use strict";cc._RF.push(e,"c0b48jFO71N/Y16x5FHOKMk","score");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.num=null,e.comboCount=1,e}return r(e,t),e.prototype.start=function(){},e.prototype.addScore=function(t){var e=cc.find("Canvas/score/number"),o=e.getComponent(cc.Label).string,n=parseInt(o)+parseInt(t);e.getComponent(cc.Label).string=n.toString()},e.prototype.subScore=function(t){var e=cc.find("Canvas/score/number"),o=e.getComponent(cc.Label).string,n=parseInt(o)-parseInt(t);n<0&&(n=0),e.getComponent(cc.Label).string=n.toString()},c([s(cc.Label)],e.prototype,"num",void 0),c([p],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],shit:[function(t,e,o){"use strict";cc._RF.push(e,"098efqSQVpDh4iYKMqooeQX","shit");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.audio=null,e}return r(e,t),e.prototype.start=function(){},e.prototype.nodeBox=function(){return this.node.getBoundingBoxToWorld()},e.prototype.onLoad=function(){var t=cc.director.getCollisionManager();t.enabled=!0,t.enabledDebugDraw=!1},e.prototype.onCollisionEnter=function(){this.node.removeFromParent();var t=cc.find("Canvas/life").getComponent("life"),e=cc.find("Canvas/score/number").getComponent("score");cc.audioEngine.play(this.audio,!1,1),t.subHeart(),e.subScore(20)},c([s(cc.AudioClip)],e.prototype,"audio",void 0),c([p],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],start:[function(t,e,o){"use strict";cc._RF.push(e,"82487rrnrNODYjyEjmdBAgm","start");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return r(e,t),e.prototype.onLoad=function(){this.node.on("touchstart",this.startBtn,this)},e.prototype.start=function(){},e.prototype.startBtn=function(){cc.director.loadScene("GameScene")},c([s(cc.Label)],e.prototype,"label",void 0),c([s],e.prototype,"text",void 0),c([p],e)}(cc.Component);o.default=a,cc._RF.pop()},{}]},{},["bgm","bird","birdAtlas","landing","life","main","move","restart","score","shit","start"]);