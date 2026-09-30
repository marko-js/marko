// tags/child.marko
const $_return = ($scope) => (html) => $scope.b.innerHTML = html;
_resumed.b0 = $_return;

// template.marko
const $Child_content__setHtml__script = _script("a1", ($scope) => $scope._.c("Hello World"));
const $Child_content__setHtml = /*@__PURE__*/ _closure_get(3, $Child_content__setHtml__script);
const $setHtml = _var_resume("a2", /*@__PURE__*/ _const(2, /* @__PURE__ */ _closure($Child_content__setHtml)));
