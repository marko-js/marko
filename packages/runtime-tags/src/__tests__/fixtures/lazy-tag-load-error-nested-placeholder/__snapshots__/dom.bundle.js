// template.marko
_enable_catch();
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("b0", "caught: <!>", "b%b", 0, $catch_content__$params);
const $placeholder_content = _content_resume("b2", "loading outer...", "b");

// child.marko
await rejectAfter(/* @__PURE__ */ new Error("load failed"), 2);
