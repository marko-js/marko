// PATCH
[`c2;D%c%;<li><!>:<!></li>`, `c1; ;<ul></ul>`, (_.a = {
  ca: {
    cAb: {
      ba: [{
        la: [{
          ta: "a",
          tb: "two"
        }, {
          ta: "b",
          tb: "two"
        }, {
          ta: "c",
          tb: "two"
        }, "c2"]
      }, "c1"]
    }
  }
}, _.a)]
"BQMA"

// PATCH holding BQMA
(_.a = {
  ca: {
    cAb: {
      ba: 0
    }
  }
}, _.a)

// PATCH holding BQMA
(_.a = {
  ca: {
    cAb: {
      ba: [{
        la: [{
          ta: "a",
          tb: "four"
        }, "c2"]
      }, "c1"]
    }
  }
}, _.a)
