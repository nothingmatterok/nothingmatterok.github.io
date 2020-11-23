function httpGet(e,t,n,r,o){var i=new egret.HttpRequest;i.responseType=egret.HttpResponseType.TEXT,i.open(e,egret.HttpMethod.GET),i.send(),i.addEventListener(egret.Event.COMPLETE,t,o),i.addEventListener(egret.IOErrorEvent.IO_ERROR,n,o),i.addEventListener(egret.ProgressEvent.PROGRESS,r,o)}var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r["throw"](e))}catch(t){i(t)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,i=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(a=u.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){u.label=n[1];break}if(6===n[0]&&u.label<a[1]){u.label=a[1],a=n;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(n);break}a[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(r){n=[6,r],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,s,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function r(r){t.call(n,r,e)}if(RES.hasRes(e)){var o=RES.getRes(e);o?r(o):RES.getResAsync(e,r,this)}else RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var VERIFYURL="https://1062258897406555.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/python_serve/simple_verify/",LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),e=new StartPanel(this.stage.stageWidth,this.stage.stageHeight),this.stage.addChild(e),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var r=new eui.Theme("resource/default.thm.json",e.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,n=RES.getRes(e);return t.texture=n,t},t.prototype.onButtonClick=function(e){var t=new eui.Panel;t.title="Title",t.horizontalCenter=0,t.verticalCenter=0,this.addChild(t)},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var StartPanel=function(e){function t(t,n){var r=e.call(this)||this;return r.width=t,r.height=n,r.addEventListener(eui.UIEvent.COMPLETE,r.panelEventInit,r),r}return __extends(t,e),t.prototype.panelEventInit=function(){this.confirmButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.confirmPswd,this)},t.prototype.confirmPswd=function(e){this.confirmButton.enabled=!1,httpGet(VERIFYURL+this.pswdTextInput.text,this.onGetComplete,this.onGetIOError,this.onGetProgress,this)},t.prototype.onGetComplete=function(e){var t=e.currentTarget,n=t.response.substring(0,1);return"y"!=n?(alert("验证失败"),void(this.confirmButton.enabled=!0)):void alert("验证成功")},t.prototype.onGetIOError=function(e){alert("网络错误"),this.confirmButton.enabled=!0},t.prototype.onGetProgress=function(e){},t}(eui.Component);__reflect(StartPanel.prototype,"StartPanel");var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,r){function o(e){t.call(r,e)}function i(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,i,null),n.call(r))}var a=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(r,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(r,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var s=e.split("/");s.pop();var u=s.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(r,generateJSON.paths[e])},this):RES.getResByUrl(u,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){t.call(r,generateJSON.paths[e])},a)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(r,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,i,null),RES.getResByUrl(e,o,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);