// PATCH
[`a0;D%c%;<li><!>:<!></li>`, `a3;D ;<li> </li>`, `a2;D%c%;<p><!>:<!></p>`, `a1; ;<div></div>`, (_.a = {
  la: [{
    ta: "1",
    tb: "b"
  }, {
    ta: "2",
    tb: "b"
  }, "a0"],
  lb: [{
    ta: "1"
  }, {
    ta: "2"
  }, "a3"],
  bc: [{
    la: [{
      ta: "1",
      tb: "b"
    }, {
      ta: "2",
      tb: "b"
    }, "a2"]
  }, "a1"]
}, _.a)]
"BQEAAAA"

// PATCH holding BQEAAAA
[(_.a = {
  la: [{
    ta: "1",
    tb: "c"
  }, {
    ta: "2",
    tb: "c"
  }, "a0"],
  lb: [{
    ta: "1"
  }, {
    ta: "2"
  }, "a3"],
  bc: [{
    la: [{
      ta: "1",
      tb: "c"
    }, {
      ta: "2",
      tb: "c"
    }, "a2"]
  }, "a1"]
}, _.a)]

// PATCH holding BQEAAAA
[(_.a = {
  la: [{
    ta: "1",
    tb: "d"
  }, {
    ta: "2",
    tb: "d"
  }, "a0"],
  lb: [{
    ta: "1"
  }, {
    ta: "2"
  }, "a3"],
  bc: 0
}, _.a)]

// PATCH holding BQEAAAA
[(_.a = {
  la: [{
    ta: "1",
    tb: "e"
  }, {
    ta: "2",
    tb: "e"
  }, "a0"],
  lb: [{
    ta: "1"
  }, {
    ta: "2"
  }, "a3"],
  bc: [{
    la: [{
      ta: "1",
      tb: "e"
    }, {
      ta: "2",
      tb: "e"
    }, "a2"]
  }, "a1"]
}, _.a)]
