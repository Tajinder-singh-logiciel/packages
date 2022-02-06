/**
 * JSS charts
 * https://jspreadsheet.com/products/charts
 * @License: this plugin requires a license
 * @dependancy chartjs
 */

if (!jSuites && typeof(require) === 'function') {
    var jSuites = require('jsuites');
}

if (!lemonade && typeof(require) === 'function') {
    var lemonade = require('lemonade');
}

if (!Chart && typeof(require) === 'function') {
    var Chart = require('chart.js');
}

var _$_74c6='You need to specify, where the chart would be inserted.;readonly;You can\'t insert chart in cell ;chart;line;none;string;;backgroundColor;Data to analyze;Contains labels;Series based on columns or rows datasets;Column datasets;Row datasets;Choose the cell where the new chart will be inserted;Insert;Cancel;Insert chart;400px;440px;!;:;1;get(;);floating;set;active;200px;Circle;circle;Star;star;Triangle;triangle;Point;point;data-name;Serie settings;Background color;Border color;Point style;Fill;Serie data range;Data;Serie label;Label;Serie add;Serie delete;pie;doughnut;get;#FFFFFF;data;delete;Configuration;Styling;Chart type;Orientation;Data labels;Series;Title;Legend;X Axis Visibility;X Axis Title;Y Axis Visibility;Y Axis Title;Y Begin at Zero;Begin at Zero;Save;Chart settings;600px;580px;modern;Line chart;Bar chart;bar;Pie chart;Doughnut chart;Radar chart;radar;all;Horizontally;x;Vertically;y;Top;top;Left;left;Right;right;Bottom;bottom;Disable;[data-path];data-path;data-value;checkbox;true;@bind;function;.jss_chart;jss_chart_cell;div;jss_chart;jss_object;jpanel;tabindex;300px;flip_to_front;Flip to front;flip_to_back;Flip to back;divisor;settings;Delete chart;px;,;=CHARTS(;[CHARTS];canvas;"get((.*?))";gi;$1;=;data.labels;i;material-icons;minimize;jss_chart_error;data-error;Something went wrong;absolute;0px;40px;addchart;onbeforepaste;=CHARTS;undefined;localhost;.;charts;License required;A valid license is required;This plugin is not in the scope of this license;object'.split(";");
(function(k,m){typeof exports===_$_74c6[146]&&typeof module!==_$_74c6[139]?module.exports=m():typeof define===_$_74c6[101]&&define.amd?define(m):k.charts=m()})(this,function(){var k=null,m=jSuites.translate,z=function(){var b={destroyCell:function(a,c,g,d){a.classList.remove(_$_74c6[103]);d.parent.tools.removeChild(d.records[g][c].chart);d.records[g][c].chart=null;d.value(c,g,_$_74c6[7])},createCell:function(a,c,g,d,h,e){if(a){var f=h.records[d][g].chart;if(!f)a.classList.add(_$_74c6[103]),f=document.createElement(_$_74c6[104]),
f.classList.add(_$_74c6[105]),f.classList.add(_$_74c6[106]),f.classList.add(_$_74c6[107]),f.setAttribute(_$_74c6[108],900),f.style.width=_$_74c6[18],f.style.height=_$_74c6[109],f.style.zIndex=3,a.ondblclick=function(){f.style.display=_$_74c6[7]},f.refresh=function(){e.top=parseInt(this.style.top)||0;e.left=parseInt(this.style.left)||0;e.width=parseInt(this.style.width)||400;e.height=parseInt(this.style.height)||300},f.update=function(q){null==q&&(q=e.chart);y(h,g,d,q)},f[_$_74c6[54]]=function(){h.setProperty(g,
d,null)},f.dblclick=function(){h.getConfig().editable&&!a.classList.contains(_$_74c6[1])&&h.parent.plugins.charts.settings.open.call(h,f,e)},f.contextmenu=function(q){if(k.current&&k.current.getConfig().editable&&!a.classList.contains(_$_74c6[1])){var n=[];n.push({icon:_$_74c6[110],title:m(_$_74c6[111]),onclick:function(){for(var l=f,w=l.parentNode.querySelectorAll(_$_74c6[102]),r=0,t,u=0;u<w.length;u++)t=parseInt(w[u].style.zIndex),t>r&&(r=t);l.style.zIndex=r+1}});n.push({icon:_$_74c6[112],title:m(_$_74c6[113]),
onclick:function(){var l=f;l.parentNode.querySelectorAll(_$_74c6[102]);l.style.zIndex=3}});n.push({type:_$_74c6[114]});n.push({icon:_$_74c6[115],title:m(_$_74c6[70]),onclick:function(){f.dblclick()}});n.push({icon:_$_74c6[54],title:m(_$_74c6[116]),onclick:function(){f[_$_74c6[54]]()}});k.current.parent.contextmenu.contextmenu.open(q,n)}},f.save=function(q){if(null!=q){var n=Object.assign({},e);n.chart=q;h.setProperty(g,d,n)}else f.update()},h.records[d][g].chart=f,h.parent.tools.appendChild(f),e.top&&
(f.style.top=parseInt(e.top)+_$_74c6[117]),e.left&&(f.style.left=parseInt(e.left)+_$_74c6[117]),e.width&&(f.style.width=parseInt(e.width)+_$_74c6[117]),e.height&&(f.style.height=parseInt(e.height)+_$_74c6[117]),e.zIndex&&(f.style.zIndex=parseInt(e.zIndex));else if(c==_$_74c6[7])return f[_$_74c6[54]](),_$_74c6[7]}if((c=JSON.stringify(e.chart).match(/get\(.*?\)/gi))&&c.length){for(var p=0;p<c.length;p++)c[p]=c[p].substring(4,c[p].length-1);c.join(_$_74c6[118])}else c=_$_74c6[7];c=_$_74c6[119]+c+_$_74c6[24];
h.executeFormula(c,g,d);return c}};b.updateCell=b.createCell;b.openEditor=function(a,c,g,d,h,e){return!1};b.closeEditor=function(a,c,g,d,h,e){return!1};b[_$_74c6[51]]=function(a,c){return _$_74c6[120]};return b}(),y=function(b,a,c,g){var d=b.records[c][a].chart;d.innerText=_$_74c6[7];canvas=document.createElement(_$_74c6[121]);d.appendChild(canvas);try{var h=JSON.stringify(g);h=h.replace(new RegExp(_$_74c6[122],_$_74c6[123]),_$_74c6[124]);h=b.executeFormula(_$_74c6[125]+h,null,null,null,!0);if(jSuites.path.call(h,
_$_74c6[126])==_$_74c6[7]){for(a=b=0;a<h.data.datasets.length;a++)b=Math.max(b,h.data.datasets[a].data.length);jSuites.path.call(h,_$_74c6[126],Array.from(Array(b).keys()))}var e=document.createElement(_$_74c6[127]);e.classList.add(_$_74c6[128]);e.innerText=_$_74c6[129];e.onclick=function(){d.style.display=_$_74c6[5]};d.appendChild(e);d.classList.remove(_$_74c6[130]);d.removeAttribute(_$_74c6[131]);new Chart(canvas,h)}catch(f){d.innerText=_$_74c6[7],d.classList.add(_$_74c6[130]),d.setAttribute(_$_74c6[131],
jSuites.translate(_$_74c6[132])),console.error(f)}if(h=x.label())e=document.createElement(_$_74c6[104]),e.style.position=_$_74c6[133],e.style.bottom=_$_74c6[134],e.style.left=_$_74c6[134],e.innerText=h,e.margin=_$_74c6[135],d.appendChild(e)},A=function(b,a){var c={toolbar:function(g){g.items.push({content:_$_74c6[136],type:_$_74c6[127],title:m(_$_74c6[17]),onclick:function(){var d=k.current.getRange();d&&(d=d.split(_$_74c6[20])[1]);c.open(k.current,d,_$_74c6[7])}});return g},onevent:function(g,d,
h){if(g==_$_74c6[137]){for(g=0;g<h.length;g++)for(d=0;d<h[g].length;d++)(_$_74c6[7]+h[g][d]).substr(0,6)==_$_74c6[138]&&(h[g][d]=_$_74c6[7]);return h}},contextMenu:function(g,d,h,e,f,p,q,n){if(null!=d&&null!=h){e={title:m(_$_74c6[17]),icon:_$_74c6[136],onclick:function(){var l=k.helpers.getColumnNameFromCoords(d,h);c.open(g,_$_74c6[7],l)}};p=0;for(let l in f)if(f[l].type==_$_74c6[114]||f[l].type==_$_74c6[4]){p=parseInt(l)+1;break}f.splice(p,0,{type:_$_74c6[114]});f.splice(p,0,e)}},open:function(g,
d,h){var e=g.getData(!0);c.input.instance=g;c.input.data=d;c.input.haveLabels=jSuites.isNumeric(e[0][0])?!1:!0;c.input.cellName=h;c.input.modal.open()}};a=document.createElement(_$_74c6[104]);b.tools.append(a);lemonade.render(function(){return lemonade.element('\n                <div>\n                    <div><Inputchart @ref="self.input" /></div>\n                    <div><Settings @ref="self.settings" /></div>\n                </div>\n            ',c,{Inputchart,Settings})},a);return c},x=function(){var b=
function(a){b.license=a;b.run()};b.k=[74,50,48,50,48,33].join(_$_74c6[7]);b.apply=function(a,c){var g=jSuites.sha512,d=_$_74c6[7],h=_$_74c6[7];128<a.length&&(a=g(a));for(var e=0;128>e;e++){var f=a[e]?a[e].charCodeAt(0):0;d+=String.fromCharCode(54^f);h+=String.fromCharCode(92^f)}return g(h+g(d+c))};b.run=function(){if(typeof b.result==_$_74c6[139]){b.result=1;try{if(b.license){var a=window.atob(b.license);a=a.split(_$_74c6[118]);if(a[1])if(a[1]=window.atob(a[1]),a[0]!=b.apply(b.k,a[1]))b.result=3;
else if(a[1]=JSON.parse(a[1]),a[1].date){var c=window.location.hostname||_$_74c6[140],g=c.split(_$_74c6[141]);c=c.split(_$_74c6[141]);2<c.length&&!jSuites.isNumeric(c[c.length-1])&&g.shift();g=g.join(_$_74c6[141]);c=c.join(_$_74c6[141]);-1==a[1].domain.indexOf(g)&&-1==a[1].domain.indexOf(c)?b.result=4:a[1].scope&&0<=a[1].scope.indexOf(_$_74c6[142])?(b.result=6,b.name=a[1].name):b.result=5}else b.result=4;else b.result=2}}catch(d){}}return b.result};b.label=function(){var a=_$_74c6[7];b.result&&1!=
b.result?2==b.result||3==b.result||4==b.result?a=_$_74c6[144]:5==b.result&&(a=_$_74c6[145]):a=_$_74c6[143];return a};b.status=function(){return b.result};return b}(),v=function(){return!0};v.oninit=function(b,a){b.setPlugins({charts:A})};v.license=function(b){null===k&&(k=this);k.editors.chart||(k.editors.chart=z,k.formula.setFormula({CHARTS}));x(b)};return v});