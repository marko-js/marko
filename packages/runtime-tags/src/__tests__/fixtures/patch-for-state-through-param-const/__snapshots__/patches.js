// PATCH
(_.a = {
  va0: !1,
  va1: {
    sessions: [{
      id: "a"
    }, {
      id: "b"
    }]
  }
}, _.a)

// PATCH
(_.a = {
  va0: !0,
  va1: {
    sessions: [{
      id: "d"
    }]
  }
}, _.a)

// PATCH
(_.a = {
  va0: !0,
  va1: null
}, _.a)
