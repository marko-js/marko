// PATCH
{
  va5: "b",
  va6: (p => p = new Promise((f, r) => _.a = {
    f,
    r(e) {
      p.catch(_ => 0);
      r(e)
    }
  }))()
}
(_.a.r(_.a = new Error("boom two", {
  cause: new Error("cause")
})), 0)
