// PATCH
{
  "$global:": {
    o: {
      x: "b",
      list: [1, 2],
      "a.b": "r"
    },
    "c.d": "s",
    p: {
      x: "t"
    }
  }
}

// PATCH
{
  "$global:": {
    o: {
      x: "c",
      list: [3, 4],
      "a.b": "u"
    },
    "c.d": "v",
    p: {
      x: "w"
    }
  }
}

// PATCH
{
  "$global:": {
    o: {
      x: "c",
      list: [3, 4, 5],
      "a.b": "u"
    },
    "c.d": "v",
    p: {
      x: "w"
    }
  }
}
