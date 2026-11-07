// PATCH
[`a9 a0 a1`, `a7;D ;<i> </i>`, `a6 a2 a3`, `a4;D ;<i> </i>`]
{
  $: {
    label: "g2",
    p: (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))()
  },
  ka: [{
    ta: "g2 early",
    pb: "a7",
    s: {
      we: "early"
    },
    cAb: {
      ta: "y"
    }
  }, "a9"],
  kb: [{
    ta: "g2 late",
    pb: "a4",
    s: {
      we: "late"
    },
    cAb: {
      ta: "y"
    }
  }, "a6"]
}
(_.a.f("y"), 0)
;E2gB

// PATCH holding E2gB
{
  $: {
    label: "g3",
    p: (p => p = new Promise((f, r) => _.a = {
      f,
      r(e) {
        p.catch(_ => 0);
        r(e)
      }
    }))()
  },
  ka: [{
    ta: "g3 early",
    pb: "a7",
    s: {
      we: "early"
    },
    cAb: {
      ta: "z"
    }
  }, "a9"],
  kb: [{
    ta: "g3 late",
    pb: "a4",
    s: {
      we: "late"
    },
    cAb: {
      ta: "z"
    }
  }, "a6"]
}
(_.a.f("z"), 0)
