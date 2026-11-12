// PATCH
[`a5`, `a3;D ;<i> </i>`, `a2`, `a0;D ;<i> </i>`]
{
  $: {
    label: "g1",
    p: (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))()
  },
  ka: [{
    ta: "g1 early",
    pb: "a3",
    cAb: {
      ta: "x"
    }
  }, "a5"],
  kb: [{
    ta: "g1 late",
    pb: "a0",
    cAb: {
      ta: "x"
    }
  }, "a2"]
}
(_.a.f("x"), 0)
;E1o
