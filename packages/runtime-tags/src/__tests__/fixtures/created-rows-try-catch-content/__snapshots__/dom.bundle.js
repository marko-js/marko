// tags/card.marko
const $template$1 = "<section><!></section>";
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag$1;

// tags/thrower.marko
const $template = "<!><!><!>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
function $setup($scope) {
	$dynamicTag($scope, (() => {
		throw new Error("probe");
	})());
}

// tags/outer.marko
const $try_content__setup = ($scope) => $setup($scope.a);
const $catch_content__entry = /*@__PURE__*/ _closure_get(3, ($scope) => $input_content($scope.a, $scope._.c), 0, "c0");
const $catch_content = _content("c1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $catch_content__entry);
const $for_content__try = /*@__PURE__*/ _try(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $try_content__setup, 0, $catch_content);
const $for_content__setup = ($scope) => $for_content__try($scope);
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $for_content__entry = /*@__PURE__*/ _const(2, /* @__PURE__ */ _closure($catch_content__entry));
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _let(5, ($scope) => $for($scope, [$scope.f]));
const $setup__script = _script("c2", ($scope) => _on($scope.a, "click", function() {
	$rows($scope, []);
}));

// template.marko
const $outer_content__input_label = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.c, $scope._._.e), ($scope) => $scope._._, "a0");
const $outer_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $outer_content__setup = ($scope) => {
	$outer_content__input_label($scope);
	$outer_content__uid($scope, _id($scope));
};
const $outer_content = _content("a1", "<input><label> </label>", " b D ", $outer_content__setup);
