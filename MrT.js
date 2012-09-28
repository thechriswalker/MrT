/* Mr T - Javascript MicroTest Library, Fool. */
var MrT = (function(d){
  var list = d.createElement('ol'), totals = d.createElement('p'), style = d.createElement('style'),
    counts = [0,0,0], total = function(done){
      totals.innerText = counts.slice(0,2).join("/");
      if(done!==void(0)){ totals.innerText += done?" PASS":" FAIL!"; totals.className = done?'p':'f'; }
    };
    style.innerText = '.p,.f{margin:1px;border-left:1em solid #0a0;padding-left:0.5em;}.f{color:#c00;border-color:#c00;}';
  return function test(name, func){
    var called = false, li = d.createElement('li'), complete = function(ok){
      return function(){
        if(called){ return; } called = true;
        li.innerHTML = name; li.className = ok?'p':'f';
        if(ok){ counts[0]++; } counts[1]++;
        list.appendChild(li); total();
        setTimeout(function(){
          if(counts[2]===counts[1]){ total(counts[0]===counts[1]); }
        },100);
      };
    }, promise = { pass: complete(true), fail: complete(false) };
    if(counts[2] === 0){ [style,totals,list].forEach(function(v){ d.body.appendChild(v); }); }
    counts[2]++;
    func(promise);
  };
})(document);