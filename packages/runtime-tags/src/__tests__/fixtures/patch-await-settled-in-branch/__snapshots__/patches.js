// PATCH
[`a1;D ;<b> </b>`, `a2;D%;<section><!></section>`, (_.a = {
  ba: [{
    pa: "a1",
    cAa: {
      ta: "x"
    }
  }, "a2"],
  tb: "b"
}, _.a)]
"BAIA"

// PATCH holding BAIA
(_.a = {
  ba: 0,
  tb: "c"
}, _.a)

// PATCH holding BAIA
(_.a = {
  ba: [{
    pa: "a1",
    cAa: {
      ta: "y"
    }
  }, "a2"],
  tb: "d"
}, _.a)
