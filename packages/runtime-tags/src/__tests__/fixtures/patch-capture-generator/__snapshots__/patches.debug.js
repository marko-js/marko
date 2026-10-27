// PATCH
{
  "PatchText:#text/0": "two",
  "PatchWrite:input_items": (function*(a) {
    yield* a
  })(["c", "d"])
}
