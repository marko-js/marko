// tags/card.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $for_content__entry = ($scope, entry) => $input_content($scope.a, entry);
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(2, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), 0, $for_content__$params);
const $rows = /*@__PURE__*/ _let(6, ($scope) => $for($scope, [$scope.g]));
const $setup__script = _script("c0", ($scope) => _on($scope.b, "click", function() {
	$rows($scope, []);
}));
