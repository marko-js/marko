// PATCH
[`a3 !a0`, `b3;b%;<!><!><!>`]
{
  ca: {
    ba: [{
      fa: "^^^a3",
      cAa: {
        xe: {
          content: _(["a", "Aa"], "b1", 1, {
            2: "two"
          }),
          *[(_.a = [{
            content: _(["a", "Aa"], "b1", 1, {
              2: "three"
            })
          }], Symbol.iterator)]() {
            yield this;
            yield* _.a
          }
        },
        ia1: "e",
        o: {
          va2: !0
        }
      }
    }, "b3"],
    xg: "b",
    Sb4: "g"
  }
}
;CxI

// PATCH holding CxI
{
  ca: {
    ba: [{
      fa: "^^^a3",
      cAa: {
        xe: {
          content: _(["a", "Aa"], "b1", 1, {
            2: "four"
          }),
          *[Symbol.iterator]() {
            yield this
          }
        },
        ia1: "e",
        o: {
          va2: !0
        }
      }
    }, "b3"],
    xg: "c",
    Sb4: "g"
  }
}

// PATCH holding CxI
{
  ca: {
    ba: [{
      fa: "^^^a3",
      cAa: {
        xe: {
          content: _(["a", "Aa"], "b1", 1, {
            2: "five"
          }),
          *[(_.a = [{
            content: _(["a", "Aa"], "b1", 1, {
              2: "six"
            })
          }], Symbol.iterator)]() {
            yield this;
            yield* _.a
          }
        },
        ia1: "e",
        o: {
          va2: !0
        }
      }
    }, "b3"],
    xg: "d",
    Sb4: "g"
  }
}
