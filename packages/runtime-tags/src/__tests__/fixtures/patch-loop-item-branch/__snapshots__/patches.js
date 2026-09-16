// PATCH
[`a2;D ;<li> </li>`, `a1; ;<ul></ul>`, `a0;D%b%;<li><!><!></li>`, (_.a = {
  la: ["a", {
    ta: "a",
    bb: 0
  }, "b", {
    ta: "b",
    bb: [{
      la: [{
        ta: "x"
      }, "a2"]
    }, "a1"]
  }, "a0"]
}, _.a)]
"BAEAAA"

// PATCH holding BAEAAA
[(_.a = {
  la: ["b", {
    ta: "b",
    bb: [{
      la: [{
        ta: "x"
      }, {
        ta: "y"
      }, "a2"]
    }, "a1"]
  }, "c", {
    ta: "c",
    bb: 0
  }, "a0"]
}, _.a)]
