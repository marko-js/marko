// PATCH
{
  xe: "b",
  ca: {
    wc: {
      read: _([], "a0"),
      onRead: _([], "a1"),
      opt: {
        v: "b",
        *[Symbol.iterator]() {
          yield this
        }
      }
    }
  }
}
