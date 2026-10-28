// tags/card.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $if_content__entry = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_content($scope.a, $scope._.c));
const $for_content__if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__entry);
const $for_content__entry = /*@__PURE__*/ _const(2, ($scope) => {
	$for_content__if($scope, $scope.c ? 0 : 1);
	$if_content__entry($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<!><!><!>", "b%", 0, $for_content__$params);
const $rows = /*@__PURE__*/ _fill_let("c1", 5, ($scope) => $for($scope, [$scope.f]));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$rows($scope, []);
}));
