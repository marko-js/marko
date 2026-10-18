// PATCH
{
  $: {
    brand: "bmce"
  },
  va9: "b",
  va10: "bmce!",
  cAc: {
    pa: 1,
    cAa: {
      ta: "s2"
    }
  },
  cd: {
    vb17: (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))(),
    cAa: {
      pa: 1,
      cAa: {
        ta: "s2"
      }
    },
    cAb: 0,
    kb: []
  }
}
(_.a.f("o2"), 0)

// PATCH
{
  $: {
    brand: "cmce"
  },
  va9: "c",
  va10: "cmce!",
  cAc: {
    pa: 1,
    cAa: {
      ta: "s3"
    }
  },
  cd: {
    vb17: (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))(),
    cAa: {
      pa: 1,
      cAa: {
        ta: "s3"
      }
    },
    cAb: 0,
    kb: []
  }
}
(_.a.f("o3"), 0)
