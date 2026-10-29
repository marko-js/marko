// PATCH
{
  $: {
    brand: "bmce"
  },
  cAc: {
    pa: 1
  },
  cd: {
    cAa: {
      pa: 1
    },
    cAb: 0,
    vb17: (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))(),
    kb: []
  },
  va10: "b",
  va11: "bmce!"
}
(_.a.f("o2"), 0)
{
  cAc: {
    cAa: {
      ta: "s2"
    }
  },
  cd: {
    cAa: {
      cAa: {
        ta: "s2"
      }
    }
  }
}

// PATCH
{
  $: {
    brand: "cmce"
  },
  cAc: {
    pa: 1,
    cAa: {
      ta: "s3"
    }
  },
  cd: {
    cAa: {
      pa: 1,
      cAa: {
        ta: "s3"
      }
    },
    cAb: 0,
    vb17: (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))(),
    kb: []
  },
  va10: "c",
  va11: "cmce!"
}
(_.a.f("o3"), 0)
