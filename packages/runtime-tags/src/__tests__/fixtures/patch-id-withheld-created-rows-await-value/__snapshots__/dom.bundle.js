// tags/card.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $if_content__entry = /*@__PURE__*/ _closure_get(8, ($scope) => $input_content($scope.a, $scope._._.c), ($scope) => $scope._._, "c0");
const $await_content__if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__entry);
const $await_content__v = ($scope, v) => $await_content__if($scope, v ? 0 : 1);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<!><!><!>", "b%");
const $for_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $for_content__input_promise = /*@__PURE__*/ _fill_join("c2", 5, /*@__PURE__*/ _for_closure(1, ($scope) => $for_content__await_promise($scope, $scope._.f)));
const $for_content__setup = ($scope) => {
	$for_content__input_promise._($scope);
	$await_content($scope);
};
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $for_content__entry = /*@__PURE__*/ _const(2, /* @__PURE__ */ _closure($if_content__entry));
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _fill_let("c3", 6, ($scope) => $for($scope, [$scope.g]));
const $setup__script = _script("c1", ($scope) => _on($scope.a, "click", function() {
	$rows($scope, []);
}));

// template.marko
const $outer_content__input_label = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _fill_join_closure("a6", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.c, $scope._._.f), ($scope) => $scope._._, "a1"), 0));
const $outer_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $outer_content__setup = ($scope) => {
	$outer_content__input_label($scope);
	$outer_content__uid($scope, _id($scope));
};
const $outer_content = _content$1("a2", "<input><label> </label>", " b D ", $outer_content__setup);
