// PATCH
{
  $: {
    brand: "bmce"
  },
  cd: {
    vb17: (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))()
  },
  va10: "b",
  va11: "bmce!"
}
{
  cAc: {
    pa: 1,
    cAa: {
      ta: "s2"
    }
  }
}
{
  cd: {
    cAa: {
      pa: 1,
      cAa: {
        ta: "s2"
      }
    }
  }
}
{
  cd: {
    kb: []
  }
}
(_.a.f("o2"), 0)

// PATCH
{
  $: {
    brand: "cmce"
  },
  cd: {
    vb17: (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))()
  },
  va10: "c",
  va11: "cmce!"
}
{
  cAc: {
    pa: 1,
    cAa: {
      ta: "s3"
    }
  }
}
{
  cd: {
    cAa: {
      pa: 1,
      cAa: {
        ta: "s3"
      }
    }
  }
}
{
  cd: {
    kb: []
  }
}
(_.a.f("o3"), 0)
