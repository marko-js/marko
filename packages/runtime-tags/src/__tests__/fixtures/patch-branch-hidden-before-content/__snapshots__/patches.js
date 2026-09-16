// PATCH
[`a1;D ;<em> </em>`, (_.a = {
  ba: 0,
  cb: {
    cAa: {
      pa: "a1",
      cAa: {
        ta: "two"
      }
    }
  }
}, _.a)]
"BgI"

// PATCH holding BgI
[`a3;D ;<p class=error> </p>`, (_.a = {
  ba: [{
    ta: "bad"
  }, "a3"],
  cb: {
    cAa: {
      pa: "a1"
    }
  }
}, _.a)]
[(_.b = {
  cb: {
    cAa: {
      cAa: {
        ta: "three"
      }
    }
  }
}, _.b)]
"BgIB"

// PATCH holding BgIB
[(_.a = {
  ba: 0,
  cb: {
    cAa: {
      pa: "a1"
    }
  }
}, _.a)]
[(_.b = {
  cb: {
    cAa: {
      cAa: {
        ta: "four"
      }
    }
  }
}, _.b)]
