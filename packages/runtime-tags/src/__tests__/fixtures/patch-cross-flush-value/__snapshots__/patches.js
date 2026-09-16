// PATCH
[(_.a = {
  pa: 1,
  pb: 1
}, _.a)]
[(_.b = {
  cAa: {
    ca: {
      "aa id": "a",
      tb: "y",
      s: {
        i: "!b0",
        vb0: 0
      },
      wg: {
        name: "y"
      }
    }
  }
}, _.b)]
[(_.c = {
  cAb: {
    ca: {
      "aa id": "b",
      tb: "y",
      s: {
        i: "!b0",
        vb0: 0
      },
      wg: _.d = _.b.cAa.ca.wg
    }
  }
}, _.c)]
