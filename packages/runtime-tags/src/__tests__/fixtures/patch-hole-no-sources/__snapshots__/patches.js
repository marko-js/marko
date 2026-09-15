// PATCH
[`a1;D ;<i> </i>`, (_.a = {
  tc: "b",
  ld: [{
    ta: "x"
  }, {
    ta: "y"
  }, "a1"],
  be: 0
}, _.a)]
"BAI"

// PATCH holding BAI
[`a2;D ;<b> </b>`, `a0;D%c%l%;<span><!> <!></span><!><!>`, (_.a = {
  tc: "c",
  ld: [{
    ta: "x"
  }, {
    ta: "y"
  }, "a1"],
  be: [{
    ta: "4",
    tb: "x+y",
    lc: [{
      ta: "x"
    }, {
      ta: "y"
    }, "a2"]
  }, "a0"]
}, _.a)]
"BAEAAA"
