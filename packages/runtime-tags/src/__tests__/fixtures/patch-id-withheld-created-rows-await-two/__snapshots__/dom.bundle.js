// tags/card.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $await_content__entry = /*@__PURE__*/ _closure_get(8, ($scope) => $input_content($scope.a, $scope._.c), 0, "c0");
const $await_content = /*@__PURE__*/ _await_content(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $await_content__entry);
const $for_content__await_promise = /*@__PURE__*/ _await_promise(0);
const $for_content__input_promise = /*@__PURE__*/ _fill_join("c2", 5, /*@__PURE__*/ _for_closure(1, ($scope) => $for_content__await_promise($scope, $scope._.f)));
const $for_content__setup = ($scope) => {
	$for_content__input_promise._($scope);
	$await_content($scope);
};
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $for_content__entry = /*@__PURE__*/ _const(2, /* @__PURE__ */ _closure($await_content__entry));
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _fill_let("c3", 6, ($scope) => $for($scope, [$scope.g]));
const $setup__script = _script("c1", ($scope) => _on($scope.a, "click", function() {
	$rows($scope, []);
}));
