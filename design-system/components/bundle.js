/* @ds-bundle: {"format":4,"namespace":"Sngular","components":[{"name":"Logo"},{"name":"Cursor"},{"name":"CursorText"},{"name":"Highlight"},{"name":"SpecialTitle"},{"name":"BigS"},{"name":"Overline"},{"name":"Button"},{"name":"Icon"},{"name":"Input"},{"name":"Stat"},{"name":"Card"}]} */
(function(){
var R=window.React,h=R.createElement;
var MARKS={"logotype":{"vb":"0 0 300 75","s":[["rect",{"x":"40.62","width":"5.21","height":"75"},true],["path",{"d":"M27.63,36.49c-.62-.43-1.54-.87-2.79-1.31-1.33-.53-2.24-.87-2.77-1.03l-2.93-.96c-3.01-.89-5.13-1.75-6.27-2.53-.95-.72-1.41-1.63-1.41-2.76,0-1.05.42-1.87,1.3-2.52.91-.71,2.16-1.07,3.72-1.07,3.52,0,6.02,1.65,7.63,5.03l.26.56,8.07-4.57-.24-.49c-1.5-3.06-3.64-5.47-6.36-7.15-2.72-1.68-5.87-2.53-9.37-2.53-4.02,0-7.47,1.19-10.28,3.52-2.85,2.29-4.29,5.47-4.29,9.45s1.43,7,4.27,9.06c2.19,1.5,5.21,2.82,8.99,3.96,3.38.93,5.74,1.81,7.04,2.62,1.16.69,1.72,1.64,1.72,2.9,0,1.16-.48,2.06-1.45,2.74-1.03.72-2.64,1.09-4.78,1.09-4.65,0-7.68-1.96-9.26-6.01l-.24-.62L0,48.57l.18.46c1.26,3.32,3.4,5.97,6.37,7.85,2.96,1.88,6.62,2.83,10.89,2.83,4.65,0,8.52-1.18,11.49-3.52,3.01-2.37,4.54-5.61,4.54-9.64,0-2.37-.56-4.46-1.65-6.18-.73-1.36-2.16-2.67-4.19-3.89h0Z"},false],["polygon",{"points":"78.8 40.31 61.42 16.07 54.17 16.07 54.17 58.95 63.71 58.95 63.71 34.66 81.09 58.95 88.35 58.95 88.35 16.07 78.8 16.07 78.8 40.31"},false],["path",{"d":"M116.56,43.93h12.66c-.78,2-2.08,3.61-3.88,4.77-2.04,1.32-4.64,2-7.72,2-4.25,0-7.67-1.23-10.18-3.65-2.51-2.45-3.78-5.61-3.78-9.36s1.25-7,3.73-9.42c2.47-2.5,5.71-3.76,9.63-3.76,2.37,0,4.57.52,6.55,1.54,1.96,1.02,3.44,2.35,4.39,3.96l.28.48,8.2-4.63-.32-.52c-1.91-3.05-4.58-5.51-7.94-7.3-3.35-1.78-7.09-2.69-11.1-2.69-6.45,0-11.95,2.18-16.34,6.48-4.35,4.3-6.56,9.64-6.56,15.85s2.23,11.49,6.63,15.8c4.43,4.26,10.07,6.42,16.76,6.42,6.29,0,11.5-1.92,15.48-5.7,3.99-3.79,6.02-8.81,6.02-14.91v-3.8h-22.5v8.43h0Z"},false],["path",{"d":"M169.31,44.06c0,2.08-.6,3.65-1.83,4.82-1.18,1.12-3.03,1.69-5.51,1.69s-4.35-.57-5.56-1.68c-1.2-1.17-1.77-2.75-1.77-4.83v-27.99h-9.48v28.65c0,4.57,1.6,8.27,4.77,10.99,3.14,2.7,7.19,4.07,12.06,4.07s8.98-1.37,12.11-4.07c3.16-2.73,4.77-6.42,4.77-10.99v-28.65h-9.55v27.99h0Z"},false],["polygon",{"points":"196.5 16.06 186.95 16.06 186.95 58.94 212.74 58.94 212.74 49.92 196.5 49.92 196.5 16.06"},false],["path",{"d":"M244.39,42.57h-10.06l5.03-14.69,5.03,14.69h0ZM244.93,16.05h-11.21l-15.32,42.88h10.29l2.56-7.51h16.15l2.56,7.51h10.35l-15.24-42.5-.14-.38h0Z"},false],["path",{"d":"M275.53,24.93h8.06c1.43,0,2.63.53,3.66,1.61,1.04,1.09,1.54,2.38,1.54,3.95s-.51,2.89-1.54,4.01c-1.03,1.08-2.23,1.61-3.66,1.61h-8.06v-11.18ZM290.38,42.9c2.29-1.15,4.18-2.78,5.61-4.87,1.56-2.31,2.35-4.85,2.35-7.54,0-3.96-1.45-7.38-4.31-10.19-2.86-2.8-6.37-4.22-10.44-4.22h-17.61v42.88h9.55v-14.48h5.48l8.58,14.48h10.41l-9.62-16.06h0Z"},false]]},"isotype":{"vb":"0 0 46 72","s":[["rect",{"x":"41","width":"5","height":"72"},true],["path",{"d":"M27.77,34.96c-.62-.42-1.54-.83-2.81-1.26-1.34-.51-2.25-.83-2.79-.99l-2.95-.92c-3.03-.86-5.16-1.68-6.3-2.43-.96-.7-1.42-1.56-1.42-2.65,0-1.01.42-1.8,1.31-2.42.91-.68,2.17-1.03,3.74-1.03,3.54,0,6.05,1.58,7.67,4.83l.27.54,8.11-4.38-.24-.47c-1.51-2.94-3.66-5.25-6.39-6.86-2.73-1.61-5.9-2.43-9.42-2.43-4.04,0-7.51,1.14-10.33,3.38-2.86,2.2-4.32,5.25-4.32,9.08s1.44,6.72,4.29,8.7c2.2,1.44,5.24,2.71,9.04,3.8,3.4.9,5.77,1.74,7.07,2.52,1.17.66,1.73,1.57,1.73,2.78,0,1.12-.48,1.98-1.46,2.63-1.04.7-2.65,1.05-4.81,1.05-4.67,0-7.72-1.89-9.31-5.77l-.24-.6L0,46.56l.18.45c1.26,3.19,3.42,5.73,6.41,7.54,2.98,1.8,6.66,2.72,10.95,2.72,4.68,0,8.56-1.14,11.55-3.38,3.03-2.28,4.56-5.39,4.56-9.25,0-2.27-.57-4.28-1.66-5.93-.74-1.31-2.17-2.57-4.21-3.74h0Z"},false]]}};
var NAVY="#061B2B",BLUE="#0070F6",WHITE="#FFFFFF";
var INKS={"positive":[NAVY,BLUE],"negative":[WHITE,BLUE],"solid-navy":[NAVY,NAVY],"solid-white":[WHITE,WHITE]};
function cx(){return Array.prototype.filter.call(arguments,Boolean).join(" ");}
function omit(p,keys){var o={};for(var k in p){if(keys.indexOf(k)<0)o[k]=p[k];}return o;}
function Logo(p){
  var type=p.type||"logotype",variant=p.variant||"positive",m=MARKS[type]||MARKS.logotype,ink=INKS[variant]||INKS.positive;
  var vb=m.vb.split(" ").map(Number),height=p.height||36,width=height*vb[2]/vb[3];
  return h("svg",{viewBox:m.vb,width:width,height:height,role:"img","aria-label":p.title||"Sngular",className:cx("sg-logo",p.className),style:p.style},
    m.s.map(function(e,i){var a=Object.assign({key:i,fill:e[2]?ink[1]:ink[0]},e[1]);return h(e[0],a);}));
}
function Cursor(p){
  var size=p.size||"text";
  return h("span",{"aria-hidden":"true",className:cx("sg-cursor","sg-cursor-"+size,p.onNavy&&"sg-on-navy",p.className),style:Object.assign({height:p.height||undefined},p.style)});
}
function CursorText(p){
  return h("div",{className:cx("sg-cursortext",p.onNavy&&"sg-on-navy",p.className)},h(Cursor,{size:"text",onNavy:p.onNavy}),h("p",{className:cx(p.big?"paragraph-big":"paragraph","sg-cursortext-body")},p.children));
}
function Highlight(p){return h("mark",{className:cx("sg-hl",p.className)},p.children);}
function SpecialTitle(p){
  var size=p.size||"title",as=p.as||(size==="title"?"h2":"p");
  return h("div",{className:cx("sg-st","sg-st-"+size,p.onNavy&&"sg-on-navy",p.className)},
    h(Logo,{type:"isotype",variant:p.onNavy?"solid-white":"solid-navy",height:size==="title"?56:32,title:""}),
    h(as,{className:cx("sg-st-box",size==="title"?"heading-1":"heading-3")},p.children));
}
function BigS(p){
  var height=p.height||240,m=MARKS.isotype,s=m.s.filter(function(e){return !e[2];})[0];
  return h("div",{"aria-hidden":"true",className:cx("sg-bigs",p.onNavy&&"sg-on-navy",p.className),style:{height:height}},
    h("svg",{viewBox:"0 14 34 44",height:Math.round(height*0.8),width:Math.round(height*0.8*34/44),className:"sg-bigs-s",style:{marginRight:-Math.round(height*0.14)}},h(s[0],Object.assign({fill:p.onNavy?WHITE:NAVY},s[1]))),
    h("span",{className:"sg-bigs-bar"}),
    p.panel===false?null:h("span",{className:"sg-bigs-panel"}));
}
function Overline(p){return h("p",{className:cx("overline","sg-overline",p.tone==="accent"&&"sg-accent",p.onNavy&&"sg-on-navy",p.className)},p.children);}
function Icon(p){
  var size=p.size||24,wght=p.weight||300;
  return h("span",{className:cx("sg-icon",p.className),"aria-hidden":p.label?undefined:"true","aria-label":p.label,role:p.label?"img":undefined,
    style:Object.assign({fontSize:size+"px",fontVariationSettings:"'FILL' "+(p.fill?1:0)+", 'wght' "+wght+", 'GRAD' 0, 'opsz' "+Math.min(48,Math.max(20,size))},p.style)},p.name);
}
function Button(p){
  var variant=p.variant||"primary",size=p.size||"md",Tag=p.href?"a":"button";
  var rest=omit(p,["variant","size","icon","iconPosition","onNavy","className","children"]);
  if(Tag==="button"&&!rest.type)rest.type="button";
  var ic=p.icon?h(Icon,{name:p.icon,size:size==="lg"?24:20}):null;
  return h(Tag,Object.assign(rest,{className:cx("sg-btn","sg-btn-"+variant,"sg-btn-"+size,p.onNavy&&"sg-on-navy",p.className)}),
    p.iconPosition==="start"?ic:null,h("span",null,p.children),p.iconPosition!=="start"?ic:null);
}
var uid=0;
function Input(p){
  var r=R.useRef(null);if(!r.current)r.current="sg-in-"+(++uid);var id=p.id||r.current;
  var rest=omit(p,["label","hint","error","className","id"]);
  return h("div",{className:cx("sg-field",p.error&&"sg-field-error",p.className)},
    h("label",{htmlFor:id,className:"sg-field-label"},p.label),
    h("input",Object.assign({id:id,className:"sg-input","aria-invalid":p.error?"true":undefined,"aria-describedby":(p.error||p.hint)?id+"-d":undefined},rest)),
    (p.error||p.hint)?h("p",{id:id+"-d",className:"sg-field-hint"},p.error?h(Icon,{name:"error",size:18,className:"sg-danger"}):null,h("span",null,p.error||p.hint)):null);
}
function Stat(p){
  return h("div",{className:cx("sg-stat",p.onNavy&&"sg-on-navy",p.className)},
    h("p",{className:"display-2 sg-stat-value"},p.value),h("p",{className:"heading-3 sg-stat-label"},p.label),p.note?h("p",{className:"auxiliary sg-stat-note"},p.note):null);
}
function Card(p){
  var body=[p.image?h("div",{key:"i",className:"sg-card-media"},h("img",{src:p.image,alt:p.imageAlt||""})):null,
    h("div",{key:"b",className:"sg-card-body"},
      p.overline?h(Overline,{tone:"accent"},p.overline):null,
      h("h3",{className:"heading-3 sg-card-title"},p.title),
      p.children?h("p",{className:"ui-body sg-card-text"},p.children):null,
      p.linkLabel?h("span",{className:"sg-card-link ui-label"},p.linkLabel,h(Icon,{name:"arrow_forward",size:20})):null)];
  return p.href?h("a",{href:p.href,className:cx("sg-card","sg-card-link-wrap",p.className)},body):h("article",{className:cx("sg-card",p.className)},body);
}
var api={Logo:Logo,Cursor:Cursor,CursorText:CursorText,Highlight:Highlight,SpecialTitle:SpecialTitle,BigS:BigS,Overline:Overline,Button:Button,Icon:Icon,Input:Input,Stat:Stat,Card:Card};
window.Sngular=Object.assign(window.Sngular||{},api);
})();
