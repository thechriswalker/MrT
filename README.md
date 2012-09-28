# MrT Javascript Mirco Testing Harness, fool.

MrT is a micro (~<del>25</del>15 lines of code) async-compatible browser side testing framework.

It is ultra-simple and and works like this:

    MrT('my test name, 50/50?', function(t){
      //do something, possibly asynchronous.
      if( Math.random() > 0.5 ){
        t.pass(); //test passes
      }else{
        t.fail(); //test fails
      }
    });

That's it. See `test.html` for a quick example.
