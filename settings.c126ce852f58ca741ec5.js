(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{2241:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),i=n(563),s=n(114),l=n(758);var c=function(e,t,n){return null==e?e:Object(l.a)(e,t,n)},u=n(5),p=n.n(u),f=n(201),d=n(2),h=n.n(d),m=n(25),b=n(416),g=n(89),y=n(360),v=n.n(y),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var _=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={message:null},e.handleNotificationChange=e.handleNotificationChange.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),w(t,[{key:"_setMessage",value:function(e){var t=this;this.setState({message:p.a.translate(e)}),this.timer=setTimeout(function(){t.setState({message:null})},4e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"handleNotificationChange",value:function(e){var t=this;return function(n){t.props.onNotificationChange(e,!!n.target.checked)}}},{key:"render",value:function(){var e=this.props,t=e.defaults,n=e.setting,a=void 0,o=void 0,i=void 0,s=e.settings.get(n),l=null;switch(n){case"locale":o=s,a=t.map(function(e){var t="languages."+e,n=p.a.translate(t);return r.a.createElement("option",{key:e,value:e},n)});break;case"themes":o=s,a=t.map(function(e){var t="settings."+e,n=p.a.translate(t);return r.a.createElement("option",{key:e,value:e},n)});break;case"browser_notifications":o=s,l=r.a.createElement("div",{className:"settings--notifications"},r.a.createElement("div",{className:"settings--notifications--group"},r.a.createElement("div",{className:"settings--notifications--item"},r.a.createElement("input",{type:"checkbox",id:"browser_notifications.allow",checked:!!o.allow,onChange:this.handleNotificationChange("allow")}),r.a.createElement("label",{htmlFor:"browser_notifications.allow"},p.a.translate("settings.browser_notifications_allow"))),r.a.createElement("div",{className:"settings--notifications--group"},r.a.createElement("div",{className:"settings--notifications--item"},r.a.createElement("input",{type:"checkbox",id:"browser_notifications.additional.transferToMe",disabled:!o.allow,checked:!!o.additional.transferToMe,onChange:this.handleNotificationChange("additional.transferToMe")}),r.a.createElement("label",{htmlFor:"browser_notifications.allow"},p.a.translate("settings.browser_notifications_additional_transfer_to_me"))))),!!o.allow&&v.a.needsPermission&&r.a.createElement("a",{href:"https://goo.gl/zZ7NHY",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{component:"div",className:"settings--notifications--no-browser-support",content:"settings.browser_notifications_disabled_by_browser_notify"})));break;case"defaultMarkets":a=null,o=null;break;case"walletLockTimeout":o=s,i=r.a.createElement("input",{type:"text",className:"settings-input",value:s,onChange:this.props.onChange.bind(this,n)});break;default:"number"==typeof s?o=t[s]:"boolean"==typeof s?o=s?t[0]:t[1]:"string"==typeof s&&(o=s),t?a=t.map(function(e){var t=e.translate?p.a.translate("settings."+e.translate):e;"unit"===n&&(t=r.a.createElement(g.a,{name:e}));var a=e.translate?e.translate:e;return r.a.createElement("option",{value:e.translate?e.translate:e,key:a},t)}):i=r.a.createElement("input",{className:"settings-input",type:"text",defaultValue:o,onBlur:this.props.onChange.bind(this,n)})}return"number"==typeof o||o||a?(o&&o.translate&&(o=o.translate),r.a.createElement("section",{className:"block-list no-border-bottom"},r.a.createElement("header",null,r.a.createElement(h.a,{component:"span",style:{fontWeight:"normal",fontFamily:"Roboto-Medium, arial, sans-serif",fontStyle:"normal"},content:"settings."+n})),a?r.a.createElement("ul",null,r.a.createElement("li",{className:"with-dropdown"},void 0,r.a.createElement("select",{value:o,className:"settings-select",onChange:this.props.onChange.bind(this,n)},a),void 0)):null,i?r.a.createElement("ul",null,r.a.createElement("li",null,i)):null,l||null,r.a.createElement("div",{className:"facolor-success"},this.state.message))):null}}]),t}(),E=n(2231),k=n(20),O=n(40),N=n(30),S=n(12),j=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),j(t,[{key:"shouldComponentUpdate",value:function(e){return!S.a.are_equal_shallow(e.myAccounts,this.props.myAccounts)||e.hiddenAccounts!==this.props.hiddenAccounts}},{key:"onToggleHide",value:function(e,t,n){n.preventDefault(),O.a.toggleHideAccount(e,t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.myAccounts,a=t.hiddenAccounts,o=a.toArray().concat(n).sort();return o.length?r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,o.map(function(t){var n=a.has(t),o=r.a.createElement("a",{onClick:n?e.onToggleHide.bind(e,t,!1):e.onToggleHide.bind(e,t,!0)},r.a.createElement(h.a,{content:"account."+(n?"unignore":"ignore")}));return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,r.a.createElement(E.a,{to:"/account/"+t+"/permissions"},r.a.createElement(h.a,{content:"settings.view_keys"}))),r.a.createElement("td",null,o))}))):r.a.createElement("div",null,r.a.createElement(h.a,{content:"settings.no_accounts"}))}}]),t}(),M=C=Object(N.a)(C,{listenTo:function(){return[k.a]},getProps:function(){return{myAccounts:k.a.getMyAccounts(),hiddenAccounts:k.a.getState().myHiddenAccounts}}}),T=n(2225),P=n(1980),x=n(19),A=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var R=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={lookupActive:!1,resetMessage:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),A(t,[{key:"onLookup",value:function(){this.setState({lookupActive:!0})}},{key:"onResetBrainkeySequence",value:function(){x.a.resetBrainKeySequence(),this.setState({resetMessage:p.a.translate("wallet.brainkey_reset_success")})}},{key:"render",value:function(){var e=this.state.lookupActive;return this.props.deprecated?r.a.createElement("div",null,r.a.createElement(T.ChangeActiveWallet,null),r.a.createElement(T.WalletDelete,null)):r.a.createElement("div",null,r.a.createElement(T.ChangeActiveWallet,null),r.a.createElement(T.WalletDelete,null),r.a.createElement("section",{style:{padding:"15px 0"},className:"block-list"},r.a.createElement("header",null,r.a.createElement(h.a,{content:"wallet.balance_claims"}),":")),r.a.createElement("div",{style:{paddingBottom:10}},r.a.createElement(h.a,{content:"settings.lookup_text"}),":"),r.a.createElement("div",{className:"button outline",onClick:this.onLookup.bind(this)},r.a.createElement(h.a,{content:"wallet.balance_claim_lookup"})),e?r.a.createElement(P.a,null):null,r.a.createElement("section",{style:{padding:"15px 0"},className:"block-list"},r.a.createElement("header",null,r.a.createElement(h.a,{content:"wallet.brainkey_seq_reset"}),":")),r.a.createElement("div",{style:{paddingBottom:10}},r.a.createElement("p",null,r.a.createElement(h.a,{unsafe:!0,content:"wallet.brainkey_seq_reset_text"})),r.a.createElement("div",{className:"button outline",onClick:this.onResetBrainkeySequence.bind(this)},r.a.createElement(h.a,{content:"wallet.brainkey_seq_reset_button"})),this.state.resetMessage?r.a.createElement("p",{style:{paddingTop:10},className:"facolor-success"},this.state.resetMessage):null))}}]),t}(),L=n(2039),B=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var V=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),B(t,[{key:"render",value:function(){return r.a.createElement(L.a,null)}}]),t}(),W=n(366),q=n(1995),H=n(594),D=n(4),F=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var J=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={json:null,error:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),F(t,[{key:"upload",value:function(e){var t=this;this.setState({error:!1,json:null});var n=e.target.files[0],a=new FileReader;a.onload=function(e){var n=e.target.result;try{var a=JSON.parse(n);for(var r in a){var o=a[r],i=o.quote,s=o.base;if(!i||!s)throw new Error("Cannot parse json data.")}t.setState({json:a})}catch(e){t.setState({error:!0})}},a.readAsText(n)}},{key:"finish",value:function(){var e=this.state.json;for(var t in m.a.clearStarredMarkets(),e){var n=e[t],a=n.quote,r=n.base;m.a.addStarMarket(a,r)}D.Notification.success({message:p()("settings.backup_favorites_success")})}},{key:"render",value:function(){var e=this.state;return r.a.createElement("div",null,r.a.createElement("input",{type:"file",id:"file_input",accept:".json",style:{border:"solid",marginBottom:15},onChange:this.upload.bind(this)}),e.error&&r.a.createElement("h5",null,r.a.createElement(h.a,{content:"settings.backup_favorites_error"})),e.json&&r.a.createElement("p",null,r.a.createElement("button",{onClick:this.finish.bind(this),className:"button success"},r.a.createElement(h.a,{content:"settings.backup_favorites_finish"}))))}}]),t}(),U=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var K=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={restoreType:0,types:["backup","key","legacy","brainkey","favorites"]},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),U(t,[{key:"_setWalletMode",value:function(){m.a.changeSetting({setting:"passwordLogin",value:!1})}},{key:"_changeType",value:function(e){this.setState({restoreType:this.state.types.indexOf(e.target.value)})}},{key:"render",value:function(){if(this.props.passwordLogin)return r.a.createElement("div",null,r.a.createElement(h.a,{content:"settings.wallet_required",component:"h4"}),r.a.createElement("p",{className:"dark-text-color"},r.a.createElement(h.a,{content:"settings.wallet_required_text"}),":"),r.a.createElement("button",{className:"button",onClick:this._setWalletMode},r.a.createElement(h.a,{content:"settings.enable_wallet"})));var e=this.state,t=e.types,n=e.restoreType,a=t.map(function(e){return r.a.createElement("option",{key:e,value:e},p.a.translate("settings.backup_"+e)," ")}),o=void 0;switch(t[n]){case"backup":o=r.a.createElement("div",null,r.a.createElement(W.b,null));break;case"brainkey":o=r.a.createElement("div",null,r.a.createElement("p",{style:{maxWidth:"40rem",paddingBottom:10}},r.a.createElement(h.a,{content:"settings.restore_brainkey_text"})),r.a.createElement(H.a,{nested:!0}));break;case"favorites":o=r.a.createElement("div",null,r.a.createElement(J,null));break;default:o=r.a.createElement(q.a,{privateKey:1===n})}return r.a.createElement("div",null,r.a.createElement("select",{onChange:this._changeType.bind(this),className:"bts-select",value:t[n]},a),o)}}]),t}(),z=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var I=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={message:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),z(t,[{key:"_setMessage",value:function(e){var t=this;this.setState({message:p.a.translate(e)}),this.timer=setTimeout(function(){t.setState({message:null})},4e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"block-list no-border-bottom"},r.a.createElement("header",null,r.a.createElement(h.a,{component:"span",style:{fontWeight:"normal",fontFamily:"Roboto-Medium, arial, sans-serif",fontStyle:"normal"},content:"settings.reset_text_description",generalName:p.a.translate("settings.general"),with:{generalName:p.a.translate("settings.general"),accessName:p.a.translate("settings.access"),faucetName:p.a.translate("settings.faucet_address")}})),r.a.createElement("div",{style:{height:60,width:"100%",paddingTop:20},className:"button",onClick:function(){m.a.clearSettings().then(function(){e._setMessage("settings.restore_default_success")})}},p.a.translate("settings.reset")),r.a.createElement("div",{className:"facolor-success",style:{marginTop:"20px",height:"18px"}},this.state.message))}}]),t}(),Y=n(2040),Z=n(367),G=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var Q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),G(t,[{key:"makeBackup",value:function(){var e=this.props.starredMarkets.toJS(),t=new Blob([JSON.stringify(e)],{type:"application/json; charset=us-ascii"});Object(Z.saveAs)(t,"favorites.json")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(h.a,{content:"settings.backup_favoritestext"})),r.a.createElement("button",{onClick:this.makeBackup.bind(this),className:"button success"},r.a.createElement(h.a,{content:"settings.backup_favoritesbtn"})))}}]),t}(),X=Object(N.a)(Q,{listenTo:function(){return[o.a]},getProps:function(){return{starredMarkets:o.a.getState().starredMarkets}}}),$=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var ee=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={restoreType:0,types:["backup","brainkey","favorites"]},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),$(t,[{key:"_changeType",value:function(e){this.setState({restoreType:this.state.types.indexOf(e.target.value)})}},{key:"render",value:function(){var e=this.state,t=e.types,n=e.restoreType,a=t.map(function(e){return r.a.createElement("option",{key:e,value:e},p.a.translate("settings.backupcreate_"+e)," ")}),o=void 0;switch(t[n]){case"backup":o=r.a.createElement(W.a,null);break;case"brainkey":o=r.a.createElement(Y.a,null);break;case"favorites":o=r.a.createElement(X,null)}return r.a.createElement("div",null,r.a.createElement("select",{onChange:this._changeType.bind(this),className:"bts-select",value:t[n]},a),o)}}]),t}(),te=n(420),ne=n(42),ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},re=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var oe=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),a=n._getMenuEntries(e),r=0,o=e.match.params.tab?a.indexOf(e.match.params.tab):e.viewSettings.get("activeSetting",0);o>=0&&(r=o);var i=["locale","unit","browser_notifications","showSettles","walletLockTimeout","themes","showAssetPercent"];return Object(ne.b)().length>1&&i.push("passwordLogin"),i.push("reset"),n.state={isAddNodeModalVisible:!1,isRemoveNodeModalVisible:!1,removeNode:{name:null,url:null},apiServer:e.settings.get("apiServer"),activeSetting:r,menuEntries:a,settingEntries:{general:i,access:["apiServer","faucet_address"]}},n.showAddNodeModal=n.showAddNodeModal.bind(n),n.hideAddNodeModal=n.hideAddNodeModal.bind(n),n.showRemoveNodeModal=n.showRemoveNodeModal.bind(n),n.hideRemoveNodeModal=n.hideRemoveNodeModal.bind(n),n._handleNotificationChange=n._handleNotificationChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),re(t,[{key:"componentDidUpdate",value:function(e){e.match.params.tab!==this.props.match.params.tab&&this.props.match.params.tab&&this._onChangeMenu(this.props.match.params.tab)}},{key:"componentWillReceiveProps",value:function(e){if(e.settings.get("passwordLogin")!==this.props.settings.get("passwordLogin")){var t=this._getMenuEntries(this.props),n=this._getMenuEntries(e),a=t[this.state.activeSetting],r=n.indexOf(a),o=n[r];this.setState({menuEntries:n}),r&&r!==this.state.activeSetting?this.setState({activeSetting:n.indexOf(a)}):(!o||this.state.activeSetting>n.length-1)&&this.setState({activeSetting:0})}}},{key:"showAddNodeModal",value:function(){this.setState({isAddNodeModalVisible:!0})}},{key:"hideAddNodeModal",value:function(){this.setState({isAddNodeModalVisible:!1})}},{key:"showRemoveNodeModal",value:function(e,t){this.setState({isRemoveNodeModalVisible:!0,removeNode:{url:e,name:t}})}},{key:"hideRemoveNodeModal",value:function(){this.setState({isRemoveNodeModalVisible:!1,removeNode:{url:null,name:null}})}},{key:"_getMenuEntries",value:function(e){if(e.deprecated)return["wallet","backup"];var t=[];return t.push("general"),e.settings.get("passwordLogin")||t.push("wallet"),t.push("accounts"),e.settings.get("passwordLogin")||t.push("password"),e.settings.get("passwordLogin")||t.push("backup"),e.settings.get("passwordLogin")||t.push("restore"),t.push("access"),Object(ne.g)().show&&t.push("faucet_address"),t.push("reset"),t}},{key:"triggerModal",value:function(e){for(var t,n=arguments.length,a=Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];(t=this.refs.ws_modal).show.apply(t,[e].concat(a))}},{key:"_handleNotificationChange",value:function(e,t){var n=c(this.props.settings.get("browser_notifications"),e,t);m.a.changeSetting({setting:"browser_notifications",value:n})}},{key:"_onChangeSetting",value:function(e,t){t.preventDefault();var n=this.props.defaults,a=null;function r(e,t){if(!t)return e;if(!t[0].translate)return t.indexOf(e);for(var n=0;n<t.length;n++)if(p.a.translate("settings."+t[n].translate)===e)return n}switch(e){case"locale":var o=p.a.getLocale();t.target.value!==o&&(f.a.switchLocale(t.target.value),m.a.changeSetting({setting:"locale",value:t.target.value}));break;case"themes":m.a.changeSetting({setting:"themes",value:t.target.value});break;case"defaultMarkets":break;case"walletLockTimeout":var i=parseInt(t.target.value,10);isNaN(i)&&(i=0),isNaN(i)||"number"!=typeof i||m.a.changeSetting({setting:"walletLockTimeout",value:i});break;case"inverseMarket":case"confirmMarketOrder":a=0===r(t.target.value,n[e]);break;case"apiServer":m.a.changeSetting({setting:"apiServer",value:t.target.value}),this.setState({apiServer:t.target.value});break;case"showSettles":case"showAssetPercent":case"passwordLogin":var s=n[e][0];s.translate&&(s=s.translate),m.a.changeSetting({setting:e,value:t.target.value===s});break;case"unit":var l=r(t.target.value,n[e]);m.a.changeSetting({setting:e,value:n[e][l]});break;default:a=r(t.target.value,n[e])}null!==a&&m.a.changeSetting({setting:e,value:a})}},{key:"onReset",value:function(){m.a.clearSettings()}},{key:"_redirectToEntry",value:function(e){this.props.history.push("/settings/"+e)}},{key:"_onChangeMenu",value:function(e){var t=this.state.menuEntries.indexOf(e);this.setState({activeSetting:t}),m.a.changeViewSetting({activeSetting:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.settings,a=t.defaults,o=this.state,i=o.menuEntries,s=o.activeSetting,l=o.settingEntries,c=void 0,u=i[s]||i[0];switch(u){case"accounts":c=r.a.createElement(M,null);break;case"wallet":c=r.a.createElement(R,this.props);break;case"password":c=r.a.createElement(V,null);break;case"backup":c=r.a.createElement(ee,null);break;case"restore":c=r.a.createElement(K,{passwordLogin:this.props.settings.get("passwordLogin")});break;case"access":c=r.a.createElement(te.a,{faucet:n.get("faucet_address"),nodes:a.apiServer,onChange:this._onChangeSetting.bind(this),showAddNodeModal:this.showAddNodeModal,showRemoveNodeModal:this.showRemoveNodeModal});break;case"faucet_address":c=r.a.createElement("input",{disabled:!Object(ne.g)().editable,type:"text",className:"settings-input",defaultValue:n.get("faucet_address"),onChange:Object(ne.g)().editable?this._onChangeSetting.bind(this,"faucet_address"):null});break;case"reset":c=r.a.createElement(I,null);break;default:c=l[u].map(function(t){return r.a.createElement(_,ae({key:t,setting:t,settings:n,defaults:a[t],onChange:e._onChangeSetting.bind(e),onNotificationChange:e._handleNotificationChange,locales:e.props.localesObject},e.state))})}return r.a.createElement("div",{className:this.props.deprecated?"":"grid-block"},r.a.createElement("div",{className:"grid-block main-content margin-block wrap"},r.a.createElement("div",{className:"grid-content shrink settings-menu",style:{paddingRight:"2rem"}},r.a.createElement(h.a,{style:{paddingBottom:10,paddingLeft:10},component:"h3",content:"header.settings",className:"panel-bg-color"}),r.a.createElement("ul",null,i.map(function(t,n){return r.a.createElement("li",{className:n===s?"active":"",onClick:e._redirectToEntry.bind(e,t),key:t},r.a.createElement(h.a,{content:"settings."+t}))}))),r.a.createElement("div",{className:"grid-content",style:{height:"100%"}},r.a.createElement("div",{className:"grid-block small-12 no-margin vertical",style:{maxWidth:1e3}},r.a.createElement(h.a,{component:"h3",content:"settings."+i[s]}),"access"!=u&&r.a.createElement(h.a,{unsafe:!0,style:{paddingTop:5,marginBottom:30},content:"settings."+i[s]+"_text",className:"panel-bg-color"}),c))),r.a.createElement(b.a,{removeNode:this.state.removeNode,isAddNodeModalVisible:this.state.isAddNodeModalVisible,isRemoveNodeModalVisible:this.state.isRemoveNodeModalVisible,onAddNodeClose:this.hideAddNodeModal,onRemoveNodeClose:this.hideRemoveNodeModal,apis:a.apiServer,api:a.apiServer.filter(function(t){return t.url===e.state.apiServer}).reduce(function(e,t){return t&&t.url},null),changeConnection:function(t){e.setState({apiServer:t})}}))}}]),t}(),ie=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var se=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),ie(t,[{key:"render",value:function(){return r.a.createElement(s.a,{stores:[o.a],inject:{settings:function(){return o.a.getState().settings},viewSettings:function(){return o.a.getState().viewSettings},defaults:function(){return o.a.getState().defaults},localesObject:function(){return i.a.getState().localesObject},apiLatencies:function(){return o.a.getState().apiLatencies}}},r.a.createElement(oe,this.props))}}]),t}();t.default=se}}]);
//# sourceMappingURL=settings.js.map