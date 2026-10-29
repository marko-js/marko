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
const $catch_content = _content$1("c1", "error");
const $try_content__entry = /*@__PURE__*/ _closure_get(3, ($scope) => $input_content($scope.a, $scope._.c), 0, "c0");
const $try_content__setup = ($scope) => {
	$try_content__entry($scope);
	$setup($scope.b);
};
const $for_content__try = /*@__PURE__*/ _try(0, /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$1, $template), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)("D%l", "b%c"), $try_content__setup, 0, $catch_content);
const $for_content__setup = ($scope) => $for_content__try($scope);
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $for_content__entry = /*@__PURE__*/ _const(2, /* @__PURE__ */ _closure($try_content__entry));
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _fill_let("c4", 5, ($scope) => $for($scope, [$scope.f]));
const $setup__script = _script("c3", ($scope) => _on($scope.a, "click", function() {
	$rows($scope, []);
}));
