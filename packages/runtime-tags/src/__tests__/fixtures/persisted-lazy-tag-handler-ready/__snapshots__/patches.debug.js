// PATCH
ready({
  "ready:packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-handler-ready/child.marko": [_ => ({
    "PatchChild:#childScope/1": {
      "PatchBindSource:1": "packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-handler-ready/child.marko_0/handler",
      "PatchAttrs:#button/0": {
        title: "second",
        onClick: bind(1)
      },
      "PatchWrite:input_title": "second"
    }
  })]
})

// PATCH
ready({
  "ready:packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-handler-ready/child.marko": [_ => ({
    "PatchChild:#childScope/1": {
      "PatchBindSource:1": "packages/runtime-tags/src/__tests__/fixtures/persisted-lazy-tag-handler-ready/child.marko_0/handler",
      "PatchAttrs:#button/0": {
        title: "third",
        onClick: bind(1)
      },
      "PatchWrite:input_title": "third"
    }
  })]
})
