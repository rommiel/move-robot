(this["webpackJsonpmove-robot"]=this["webpackJsonpmove-robot"]||[]).push([[0],{31:function(e,t,a){},42:function(e,t,a){e.exports=a(53)},47:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(6),i=a.n(o),r=(a(47),a(38)),s=a(32),c=a(14),h=a(23),u=a(24),p=a(7),m=a(28),d=a(27),b=(a(31),a(33)),y=a.n(b),f=a(37),x=a.n(f),E=a(36),v=a.n(E),O=a(35),g=a.n(O),k=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).getFace=e.getFace.bind(Object(p.a)(e)),e}return Object(u.a)(a,[{key:"getFace",value:function(e){switch(e){case"north":return l.a.createElement(y.a,null);case"east":return l.a.createElement(g.a,null);case"west":return l.a.createElement(v.a,null);case"south":return l.a.createElement(x.a,null)}}},{key:"render",value:function(){return l.a.createElement("div",{className:this.props.x==this.props.value.x&&this.props.y==this.props.value.y?"selected box":"box"},l.a.createElement("span",null,this.props.value.x,","),l.a.createElement("span",null,this.props.value.y),l.a.createElement("div",{className:"arrowHolder"},this.props.x==this.props.value.x&&this.props.y==this.props.value.y?this.getFace(this.props.face):null))}}]),a}(l.a.Component),w=a(72),C=a(71),R=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e,n;return Object(h.a)(this,a),(n=t.call(this)).state=(e={face:"north",x:null,y:null},Object(c.a)(e,"face",null),Object(c.a)(e,"isOpen",!1),Object(c.a)(e,"showButton",!1),Object(c.a)(e,"reportOpen",!1),Object(c.a)(e,"start",!1),Object(c.a)(e,"box",[{x:0,y:4},{x:1,y:4},{x:2,y:4},{x:3,y:4},{x:4,y:4},{x:0,y:3},{x:1,y:3},{x:2,y:3},{x:3,y:3},{x:4,y:3},{x:0,y:2},{x:1,y:2},{x:2,y:2},{x:3,y:2},{x:4,y:2},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:4,y:1},{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0}]),e),n.handleOpen=n.handleOpen.bind(Object(p.a)(n)),n.handleClose=n.handleClose.bind(Object(p.a)(n)),n.handleConfirm=n.handleConfirm.bind(Object(p.a)(n)),n.handleMove=n.handleMove.bind(Object(p.a)(n)),n.handleRight=n.handleRight.bind(Object(p.a)(n)),n.handleLeft=n.handleLeft.bind(Object(p.a)(n)),n.handleReport=n.handleReport.bind(Object(p.a)(n)),n.reportClose=n.reportClose.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"handleOpen",value:function(){this.setState({isOpen:!0})}},{key:"handleClose",value:function(){this.setState({isOpen:!1})}},{key:"handleConfirm",value:function(){this.setState({isOpen:!1});var e=parseInt(document.getElementById("inputx").value),t=parseInt(document.getElementById("inputy").value),a=document.getElementById("face").value;e||(e=0),t||(t=0),e<0||e>4||t<0||t>4?alert("invalid values"):this.setState({x:e,y:t,face:a,showButton:!0})}},{key:"handleMove",value:function(){var e=this.state.x,t=this.state.y,a=this.state.face;if(0==e&&"west"==a)alert("Robot will fall. Action not permitted!");else if(4==e&&"east"==a)alert("Robot will fall. Action not permitted!");else if(0==t&&"south"==a)alert("Robot will fall. Action not permitted!");else if(4==t&&"north"==a)alert("Robot will fall. Action not permitted!");else switch(a){case"north":this.setState({y:t+1});break;case"east":this.setState({x:e+1});break;case"south":this.setState({y:t-1});break;case"west":this.setState({x:e-1})}}},{key:"handleRight",value:function(){switch(this.state.face){case"north":this.setState({face:"east"});break;case"east":this.setState({face:"south"});break;case"south":this.setState({face:"west"});break;case"west":this.setState({face:"north"})}}},{key:"handleLeft",value:function(){switch(this.state.face){case"north":this.setState({face:"west"});break;case"west":this.setState({face:"south"});break;case"south":this.setState({face:"east"});break;case"east":this.setState({face:"north"})}}},{key:"handleReport",value:function(){this.setState({reportOpen:!0})}},{key:"reportClose",value:function(){this.setState({x:null,y:null,face:null,showButton:!1,reportOpen:!1})}},{key:"render",value:function(){var e,t=this,a=[],n=Object(s.a)(this.state.box.entries());try{for(n.s();!(e=n.n()).done;){var o=Object(r.a)(e.value,2),i=o[0],h=o[1];a.push(l.a.createElement(k,{value:h,key:i,index:i,face:this.state.face,x:this.state.x,y:this.state.y}))}}catch(u){n.e(u)}finally{n.f()}return l.a.createElement("div",{className:"container"},l.a.createElement("h1",{style:{marginTop:"50px"}},"Move Robot"),this.state.start?l.a.createElement("div",null,l.a.createElement("div",{className:"box-container"},a),l.a.createElement(w.a,{variant:"contained",onClick:this.handleOpen,style:{marginTop:"20px"}},"Place Robot"),this.state.showButton?l.a.createElement("span",null,l.a.createElement(w.a,{variant:"contained",onClick:this.handleMove,style:{marginTop:"20px",marginLeft:"20px"}},"MOVE"),l.a.createElement(w.a,{variant:"contained",onClick:this.handleLeft,style:{marginTop:"20px",marginLeft:"20px"}},"LEFT"),l.a.createElement(w.a,{variant:"contained",onClick:this.handleRight,style:{marginTop:"20px",marginLeft:"20px"}},"RIGHT"),l.a.createElement(w.a,Object(c.a)({variant:"contained",onClick:null,style:{marginTop:"20px",marginLeft:"20px"}},"onClick",this.handleReport),"REPORT")):null):l.a.createElement(w.a,{onClick:function(){return t.setState({start:!0})},variant:"contained",color:"primary",style:{width:"90%",height:"100px",margin:"20px auto 20px",fontSize:"35px"}},"START"),l.a.createElement("h6",{style:{marginTop:"20px"}},"Instructions:"),l.a.createElement("ul",{style:{fontSize:"13px"}},l.a.createElement("li",{style:{marginTop:"10px"}},'Click the "PLACE ROBOT" button and input the POSITION where the Robot is facing, X and Y coordinates and for the Robot\'s starting position'),l.a.createElement("li",{style:{marginTop:"10px"}},'Click *"MOVE" button to make the Robot move forward to the direction it face.'),l.a.createElement("li",{style:{marginTop:"10px"}},'Click *"LEFT" or *"RIGHT" button to change the Robot\'s facing direction accordingly while retaining its current X and Y position.'),l.a.createElement("li",{style:{marginTop:"10px"}},'Click *"REPORT" button to inform the user the current location and the direction that the Robot is currently facing.')),l.a.createElement("small",{style:{fontSize:"10px"}},"* This buttons will be shown upon giving the Robot's initial position."),l.a.createElement("br",null),l.a.createElement("small",{style:{fontSize:"10px"}},"** After clicking REPORT button, the Robot will leave the area."),l.a.createElement("br",null),l.a.createElement("small",{style:{fontSize:"10px"}},"*** If you didn't put X and Y coordinate, it will automatically place to 0,0."),l.a.createElement(C.a,{open:this.state.isOpen,onClose:this.handleClose},l.a.createElement("div",{className:"paperModal"},l.a.createElement("label",{htmlFor:"X"},"X: "),l.a.createElement("input",{type:"number",min:"0",max:"4",id:"inputx"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"Y"},"Y: "),l.a.createElement("input",{type:"number",min:"0",max:"4",id:"inputy"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"FACING"},"FACING: "),l.a.createElement("br",null),l.a.createElement("select",{id:"face",name:"face",className:"width100"},l.a.createElement("option",{value:"north"},"North"),l.a.createElement("option",{value:"east"},"East"),l.a.createElement("option",{value:"west"},"West"),l.a.createElement("option",{value:"south"},"South")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(w.a,{variant:"contained",color:"primary",onClick:this.handleConfirm},"confirm"))),l.a.createElement(C.a,{open:this.state.reportOpen,onClose:this.reportClose,disableBackdropClick:!0},l.a.createElement("div",{className:"paperModal",style:{height:"130px"}},l.a.createElement("p",null,"Robot is on X: ",this.state.x," and Y: ",this.state.y," facing: ",this.state.face),l.a.createElement(w.a,{variant:"contained",color:"secondary",onClick:this.reportClose},"CLOSE"))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.4396fc7f.chunk.js.map