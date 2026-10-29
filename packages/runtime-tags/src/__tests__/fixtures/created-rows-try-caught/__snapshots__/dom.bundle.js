// tags/thrower.marko
const $template = "<!><!><!>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
function $setup($scope) {
	$dynamicTag($scope, (() => {
		throw new Error("probe");
	})());
}

// tags/outer.marko
const $catch_content = _content("b0", "error");
const $try_content__setup = ($scope) => $setup($scope.a);
const $for_content__try = /*@__PURE__*/ _try(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $try_content__setup, 0, $catch_content);
const $for_content__setup = ($scope) => $for_content__try($scope);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<!><!><!>", "b%", $for_content__setup);
const $rows = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$rows($scope, []);
}));
