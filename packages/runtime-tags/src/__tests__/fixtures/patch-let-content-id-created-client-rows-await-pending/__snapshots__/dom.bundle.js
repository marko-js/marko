// tags/card.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $await_content__entry = /*@__PURE__*/ _closure_get(8, ($scope) => $input_content($scope.a, $scope._.c), 0, "c0");
const $await_content = /*@__PURE__*/ _await_content(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $await_content__entry);
const $for_content__await_promise = /*@__PURE__*/ _await_promise(0);
const $for_content__input_promise = /*@__PURE__*/ _for_closure_patch("c1", 1, ($scope) => $for_content__await_promise($scope, $scope._.f), 7);
const $for_content__setup = ($scope) => {
	$for_content__input_promise._($scope);
	$await_content($scope);
};
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $for_content__entry = /*@__PURE__*/ _const(2, /* @__PURE__ */ _closure($await_content__entry));
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _fill_let("c3", 6, ($scope) => $for($scope, [$scope.g]));
const $setup__script = _script("c2", ($scope) => _on($scope.a, "click", function() {
	$rows($scope, []);
}));

// template.marko
const $outer_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 7, ($scope) => _text($scope.c, $scope._._.f), ($scope) => $scope._._, "a4", 0);
const $outer_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $outer_content__setup = ($scope) => {
	$outer_content__input_label($scope);
	$outer_content__uid($scope, _id($scope));
};
const $outer_content = _content$1("a1", "<input><label> </label>", " b D ", $outer_content__setup);
