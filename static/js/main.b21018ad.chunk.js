(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),c=n.n(s),o=n(2),u=n(3),l=n(5),i=n(4),p=(n(16),n(17),n(1)),m=n.n(p),d=n(10),h=n(6),f=(n(19),n(7)),v=n.n(f),b=function(e){return fetch("".concat("https://mate-api.herokuapp.com").concat(e)).then((function(e){return e.json()})).then((function(e){return e.data}))},E=function(e){return b("/users/".concat(e))},_=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:"",visibleTodos:[],status:0},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/todos");case 2:t=e.sent,this.setState({visibleTodos:Object(d.a)(t).slice(0,10)});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.selectUser,n=this.state.visibleTodos,a=this.state,s=a.status,c=a.title;return 0!==s&&(n=1===s?n.filter((function(e){return e.completed})):n.filter((function(e){return!e.completed}))),0!==c.length&&(n=n.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))),r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("input",{type:"text",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}}),r.a.createElement("select",{value:s,onChange:function(t){return e.setState({status:+t.target.value})}},r.a.createElement("option",{value:0},"Show All"),r.a.createElement("option",{value:1},"Show Completed"),r.a.createElement("option",{value:2},"Show Not completed")),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},n.map((function(e){return r.a.createElement("li",{key:e.id,className:v()("TodoList__item",e.completed?"TodoList__item--checked":"TodoList__item--unchecked")},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0,checked:e.completed}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:v()("TodoList__user-button","button",e.completed?"TodoList__user-button--selected":""),type:"button",onClick:function(){t(e.userId)}},"User #",e.userId))})))))}}]),n}(r.a.Component),y=(n(20),function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(this.props.userId);case 2:t=e.sent,this.setState({user:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(h.a)(m.a.mark((function e(t,n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.userId===this.props.userId){e.next=5;break}return e.next=3,E(this.props.userId);case 3:a=e.sent,this.setState({user:a});case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.userId,n=this.state.user;return r.a.createElement("div",{className:"CurrentUser"},n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",t)),r.a.createElement("h3",{className:"CurrentUser__name"},n.name),r.a.createElement("p",{className:"CurrentUser__email"},n.email),r.a.createElement("p",{className:"CurrentUser__phone"},n.phone),r.a.createElement("button",{type:"button",onClick:function(){return e.setState({user:null})}},"Clear")))}}]),n}(r.a.Component)),k=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={selectedUserId:0},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(_,{selectUser:function(t){e.setState({selectedUserId:t})}})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},t?r.a.createElement(y,{userId:t}):"No user selected")))}}]),n}(r.a.Component);c.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.b21018ad.chunk.js.map