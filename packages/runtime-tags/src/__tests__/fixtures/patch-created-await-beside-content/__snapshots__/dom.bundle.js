// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $c = fill("c1", /*@__PURE__*/ _let(7, ($scope) => $input_content($scope.b, $scope.h)));
const $await_content = _resumed.c4 = /*@__PURE__*/ _await_content(2, "<span> </span>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise(2, $await_content__$params);
const $p = /*@__PURE__*/ _fill_let("c2", 8, ($scope) => $await_promise($scope, $scope.i));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, 0);
}));
