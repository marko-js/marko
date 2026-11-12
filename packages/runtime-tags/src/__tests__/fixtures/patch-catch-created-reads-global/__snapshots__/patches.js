// PATCH
[`a5 a8 a9`, `a3;D ;<i> </i>`, `a2 a11 a12`, `a0;D ;<i> </i>`]
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
    pb: "a3",
    s: {
      we: "early"
    },
    cAb: {
      ta: "y"
    }
  }, "a5"],
  kb: [{
    ta: "g2 late",
    pb: "a0",
    s: {
      we: "late"
    },
    cAb: {
      ta: "y"
    }
  }, "a2"]
}
(_.a.f("y"), 0)
;E1o

// PATCH holding E1o
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
    pb: "a3",
    s: {
      we: "early"
    },
    cAb: {
      ta: "z"
    }
  }, "a5"],
  kb: [{
    ta: "g3 late",
    pb: "a0",
    s: {
      we: "late"
    },
    cAb: {
      ta: "z"
    }
  }, "a2"]
}
(_.a.f("z"), 0)
