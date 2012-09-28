/* Mr T - Javascript MicroTest Library, Fool. */
var MrT = (function(d, ac, ce, it, id, p){
var b=d.body,list=d[ce]('ul'),_=list.id=id,totals=d[ce]('p'),style=d[ce]('style'),counts=[0,0,0],
total=function(done){totals[it]=counts.slice(0,2).join("/");totals.className=done?'p':'f';};
style[it]=['ul{list-style-type:none;}li'+p+'none;}ul:target '+p+'block}.p,.f{position:relative;}.p',
'✔";color:#0a0;}.f:','✘";color:#900;}p.p,p.f{margin-left:20px;}'].join(':before {left:-20px;position:absolute;content:"');
return function test(name, func){
  var called=false,li=d[ce]('li'),e=function(ok){return function(){
  if(called||!(called=true)){return;}
  list.appendChild(li,li.innerHTML=name,li.className=ok?'p':'f');
  if(++counts[1] && ok){ counts[0]++; }
  total(setTimeout(function(){if(counts[2]===counts[1]){ total(counts[0]===counts[1]);}},0));
  };}; if(!counts[2]++ || [style,totals,list].forEach(function(v){b[ac](v);})||true){func({pass:e(!0),fail:e(!1)});}
};})(document,'appendChild','createElement','innerText','show_passes','.p{display:');
