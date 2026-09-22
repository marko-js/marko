// PATCH
[`a1;D ;<em> </em>`, {
  ba: 0,
  cb: {
    cAa: {
      pa: "a1",
      cAa: {
        ta: "two"
      }
    }
  }
}]
"BgI"

// PATCH holding BgI
[`a3;D ;<p class=error> </p>`, {
  ba: [{
    ta: "bad"
  }, "a3"],
  cb: {
    cAa: {
      pa: "a1"
    }
  }
}]
{
  cb: {
    cAa: {
      cAa: {
        ta: "three"
      }
    }
  }
}
"BgIB"

// PATCH holding BgIB
{
  ba: 0,
  cb: {
    cAa: {
      pa: "a1"
    }
  }
}
{
  cb: {
    cAa: {
      cAa: {
        ta: "four"
      }
    }
  }
}
