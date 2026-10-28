// tags/card.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $for_content2__inner = ($scope, inner) => $input_content($scope.a, inner);
const $for_content2__$params = ($scope, $params3) => $for_content2__inner($scope, $params3[0]);
const $for_content__for = /*@__PURE__*/ _for_of_unkeyed(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), 0, $for_content2__$params);
const $for_content__entry = ($scope, entry) => $for_content__for($scope, [[entry]]);
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<!><!><!>", "b%", 0, $for_content__$params);
const $rows = /*@__PURE__*/ _let(5, ($scope) => $for($scope, [$scope.f]));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$rows($scope, []);
}));
