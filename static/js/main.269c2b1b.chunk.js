(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{197:function(t,n,e){t.exports=e(476)},202:function(t,n,e){},215:function(t,n){},224:function(t,n){},242:function(t,n){},244:function(t,n){},261:function(t,n){},262:function(t,n){},264:function(t,n){},265:function(t,n){},341:function(t,n){},343:function(t,n){},352:function(t,n){},354:function(t,n){},379:function(t,n){},381:function(t,n){},387:function(t,n){},388:function(t,n){},390:function(t,n){},402:function(t,n){},405:function(t,n){},410:function(t,n){},421:function(t,n){},424:function(t,n){},476:function(t,n,e){"use strict";e.r(n);var a=e(25),c=e.n(a),i=e(194),u=e.n(i),r=e(3),o=e(5),s=e(9),l=e(8),f=(e(202),e(24)),p=e.n(f),h=e(195),d=e(101),b=e.n(d),v=function t(){var n=this;Object(r.a)(this,t),this.apiKey="5WRA1HDZ413YKABS2GDIQS7Z8WH7H7BNTP",this.rpcURL="https://mainnet.infura.io/v3/b3481ded389540249adbb7c00ca8aa38",this.web3=new b.a(new b.a.providers.HttpProvider(this.rpcURL)),this.getBalance=function(){var t=Object(h.a)(p.a.mark((function t(e){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.web3.eth.getBalance(e,(function(t,e){a=n.web3.utils.fromWei(e,"ether")}));case 2:return console.log(a),t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},m=function(t){Object(s.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(r.a)(this,e);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=n.call.apply(n,[this].concat(c))).service=new v,t.state={balance:null,valueAddress:"0xA145ac099E3d2e9781C9c848249E2e6b256b030D"},t.updateBall=function(){var n=t.state.valueAddress;t.service.getBalance(n).then((function(n){t.setState({balance:n})}))},t.setInputValue=function(n){var e=n.target.value;t.setState({valueAddress:e})},t}return Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this,n=this.state.valueAddress;this.service.getBalance(n).then((function(n){t.setState({balance:n})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("h1",{className:"bal"},"BAL:",this.state.balance),c.a.createElement("input",{onChange:this.setInputValue,className:"input",placeholder:"enter address"}),c.a.createElement("button",{onClick:this.updateBall,className:"btn-ball"},"Update BAll"))}}]),e}(a.Component);u.a.render(c.a.createElement(m,null),document.getElementById("root"))}},[[197,1,2]]]);
//# sourceMappingURL=main.269c2b1b.chunk.js.map