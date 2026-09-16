// PATCH
[(_.a = {
  1: "a0",
  va0: {
    label: "b",
    *[(_.b = [b(1)], Symbol.iterator)]() {
      yield* _.b
    }
  },
  va1: "b",
  we: "b",
  wf: b(1)
}, _.a)]
