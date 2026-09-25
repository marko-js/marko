// template.marko
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("b0", "caught: <!>", "b%", 0, $catch_content__$params);

// child.marko
await rejectAfter(/* @__PURE__ */ new Error("load failed"), 2);
