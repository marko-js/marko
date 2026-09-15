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

// PATCH
[`a3;D ;<p class=error> </p>`, `a1;D ;<em> </em>`, {
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

// PATCH
[`a1;D ;<em> </em>`, {
  ba: 0,
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
        ta: "four"
      }
    }
  }
}
