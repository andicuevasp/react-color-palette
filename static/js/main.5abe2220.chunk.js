(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),o=a(2),n=a.n(o),i=a(3),c=a(4),u=a(6),s=a(5),d=a(7),m=["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"],h=function(e){return r.a.createElement("li",{className:"color-option",onClick:function(){return e.selectColor(e.color)}},r.a.createElement("span",{className:"color-option-preview",style:{backgroundColor:e.color}}),e.color)},p=function(e){var t=m.map(function(t){return r.a.createElement(h,{key:t,color:t,selectColor:e.selectColor})});return r.a.createElement("ul",{className:"color-options"},t)},k=function(){return r.a.createElement("svg",{width:"50",height:"50",viewBox:"0 0 24 24",className:"heart"},r.a.createElement("path",{d:"M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"}))},C=function(e){var t="selected-color";return e.palette.includes(e.selectedColor)&&(t+=" already-in-palette"),r.a.createElement("div",{className:t,style:{backgroundColor:e.selectedColor},onClick:function(){return e.addToPalette(e.selectedColor)}},r.a.createElement(k,null))},y=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"CSS Color Options"),r.a.createElement(p,{selectColor:e.selectColor}),r.a.createElement(C,{selectedColor:e.selectedColor,palette:e.palette,addToPalette:e.addToPalette}),r.a.createElement("div",{className:"color-options-row"}))},G=function(e){return r.a.createElement("li",{className:"palette-color"},r.a.createElement("span",{className:"palette-color-preview",style:{backgroundColor:e.color}}),r.a.createElement("div",null,e.color,r.a.createElement("span",{onClick:function(){return e.removeFromPalette(e.color)},className:"remove-from-palette"},"X")))},S=function(e){var t=e.palette.map(function(t){return r.a.createElement(G,{key:t,color:t,removeFromPalette:e.removeFromPalette})});return r.a.createElement("div",null,r.a.createElement("h2",null,"Color Palette"),r.a.createElement("ul",{className:"palette-colors"},t),r.a.createElement("hr",null))},v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={selectedColor:"blue",palette:[]},a.selectColor=function(e){return a.setState({selectedColor:e})},a.addToPalette=function(e){if(!a.state.palette.includes(e)){var t=a.state.palette.concat(e);a.setState({palette:t})}},a.removeFromPalette=function(e){var t=a.state.palette.filter(function(t){return t!==e});a.setState({palette:t})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,{palette:this.state.palette,removeFromPalette:this.removeFromPalette}),r.a.createElement(y,{palette:this.state.palette,addToPalette:this.addToPalette,selectColor:this.selectColor,selectedColor:this.state.selectedColor}))}}]),t}(l.Component),g=(a(14),document.getElementById("root"));n.a.render(r.a.createElement(v,null),g)},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.5abe2220.chunk.js.map