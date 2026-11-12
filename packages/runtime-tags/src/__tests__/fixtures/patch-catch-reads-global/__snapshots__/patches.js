// PATCH
[`a5;D l%;<b> </b><!><!>`, `a3;D ;<i> </i>`, `a2;D l%;<b> </b><!><!>`, `a0;D ;<i> </i>`]
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
    s: {
      we: "early"
    },
    cAb: {
      ta: "x"
    }
  }, "a5"],
  kb: [{
    ta: "g1 late",
    pb: "a0",
    s: {
      we: "late"
    },
    cAb: {
      ta: "x"
    }
  }, "a2"]
}
(_.a.f("x"), 0)
;E1o
