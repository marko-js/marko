// tags/card.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $catch_content = _content$1("c1", "error");
const $try_content__entry = /*@__PURE__*/ _closure_get(3, ($scope) => $input_content($scope.a, $scope._.c), 0, "c0");
const $for_content__setup = /* @__PURE__ */ _try(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $try_content__entry, 0, $catch_content);
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $for_content__entry = /*@__PURE__*/ _const(2, /* @__PURE__ */ _closure($try_content__entry));
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _fill_let("c4", 5, ($scope) => $for($scope, [$scope.f]));
const $setup__script = _script("c3", ($scope) => _on($scope.a, "click", function() {
	$rows($scope, []);
}));

// template.marko
const $outer_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 5, ($scope) => _text($scope.c, $scope._._.e), ($scope) => $scope._._, "a3", 0);
const $outer_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $outer_content__setup = ($scope) => {
	$outer_content__input_label($scope);
	$outer_content__uid($scope, _id($scope));
};
const $outer_content = _content$1("a1", "<input><label> </label>", " b D ", $outer_content__setup);
