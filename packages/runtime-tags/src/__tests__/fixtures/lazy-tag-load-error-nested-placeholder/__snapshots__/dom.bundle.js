// template.marko
const $catch_content__$params = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("b0", "caught: <!>", "b%", 0, $catch_content__$params);
const $placeholder_content = _content("b1", "loading outer...");

// child.marko
await rejectAfter(/* @__PURE__ */ new Error("load failed"), 2);
