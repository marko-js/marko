// PATCH
`a3 !a>b0;/ b%c&b;<button>copy</button><!><!><!>`
{
  bb: [{
    ca: {
      o: {
        vb1: {
          content: _(["Ab"], "a1", 1, {
            2: "b"
          }),
          *[(_.a = [{
            content: _(["Ab"], "a1", 1, {
              2: "c"
            })
          }], Symbol.iterator)]() {
            yield this;
            yield* _.a
          }
        }
      }
    }
  }, "a3"]
}
;BgE

// PATCH holding BgE
{
  bb: [{
    ca: {
      o: {
        vb1: {
          content: _(["Ab"], "a1", 1, {
            2: "d"
          }),
          *[(_.a = [{
            content: _(["Ab"], "a1", 1, {
              2: "e"
            })
          }], Symbol.iterator)]() {
            yield this;
            yield* _.a
          }
        }
      }
    }
  }, "a3"]
}
