(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,function(e,t,r){e.exports={square:"Square_square__2uSVZ",cross:"Square_cross__3JBZu",circle:"Square_circle__3CFVs"}},,function(e,t,r){e.exports={scoreBoard:"ScoreBoard_scoreBoard__QX25N"}},,,,,function(e,t,r){e.exports={board:"Board_board__kNpEF"}},function(e,t,r){e.exports={restartButton:"RestartButton_restartButton__2-vxb"}},,,function(e,t,r){e.exports=r(19)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(5),s=r.n(c),i=(r(17),r(2)),u=r(6),l=r(7),o=r(11),d=r(10),m=(r(18),r(1)),k=r.n(m),f=function(e){var t=e.click,r=e.id,a=e.clicked,c=e.sign;return n.a.createElement("button",{className:k.a.square+" "+(a?"cross"===c?k.a.cross:k.a.circle:" "),onClick:function(){return t(r)}})},v=r(8),g=r.n(v),O=function(e){var t=e.squares,r=e.clickHandle,a=(e.turn,t.map((function(e){return n.a.createElement(f,{key:e.id,id:e.id,sign:e.sign,clicked:e.clicked,click:r})})));return n.a.createElement("div",{className:g.a.board},a)},E=r(3),p=r.n(E),q=r(9),_=r.n(q),h=function(e){var t=e.restart;return n.a.createElement("button",{className:_.a.restartButton,onClick:t},"Try Agin!")},b=function(e){var t=e.turn,r=e.win,a=e.draw,c=e.restart;return n.a.createElement(n.a.Fragment,null,r?n.a.createElement("div",{className:p.a.scoreBoard},n.a.createElement("h3",null,t?"Circle":"Cross"," wins!"),n.a.createElement(h,{restart:c})):a?n.a.createElement("div",{className:p.a.scoreBoard},n.a.createElement("h3",null,"It's Draw!!"),n.a.createElement(h,{restart:c})):null)},w=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],y=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(u.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={squares:[{id:0,clicked:!1,sign:" "},{id:1,clicked:!1,sign:" "},{id:2,clicked:!1,sign:" "},{id:3,clicked:!1,sign:" "},{id:4,clicked:!1,sign:" "},{id:5,clicked:!1,sign:" "},{id:6,clicked:!1,sign:" "},{id:7,clicked:!1,sign:" "},{id:8,clicked:!1,sign:" "}],PlayerOneTurn:!0,GameOver:!1,isDraw:!1},e.handleSquareOnClick=function(t){var r=!1;if(!e.state.GameOver){var a=Object(i.a)(e.state.squares);a.forEach((function(r){r.id===t&&(r.clicked=!0,e.state.PlayerOneTurn?r.sign="cross":r.sign="circle")})),e.checkingWin(e.state.PlayerOneTurn)&&(r=!0),e.setState({squares:a,PlayerOneTurn:!e.state.PlayerOneTurn,GameOver:r}),e.isDraw()}},e.checkingWin=function(t){var r=t?"cross":"circle";return w.some((function(t){return t.every((function(t){return e.state.squares[t].sign===r}))}))},e.isDraw=function(){var t=Object(i.a)(e.state.squares).every((function(e){return!0===e.clicked}));t&&e.setState({isDraw:t})},e.restartGame=function(){var t=Object(i.a)(e.state.squares);t.map((function(e){return e.sign=" ",e.clicked=!1})),e.setState({squares:t,PlayerOneTurn:!0,GameOver:!1,isDraw:!1})},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this.state,t=e.squares,r=e.PlayerOneTurn,a=e.GameOver,c=e.isDraw;return n.a.createElement("div",{className:"App"},n.a.createElement("h2",null,"TIC TAC TOE"),n.a.createElement(O,{squares:t,turn:r,clickHandle:this.handleSquareOnClick}),n.a.createElement(b,{turn:r,win:a,draw:c,restart:this.restartGame}))}}]),r}(n.a.Component);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.c00bccff.chunk.js.map