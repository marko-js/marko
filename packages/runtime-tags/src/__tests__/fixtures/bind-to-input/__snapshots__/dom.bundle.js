// tags/counter.marko
const $x$1 = /* @__PURE__ */ _let_change(9, ($scope) => _attr($scope.a, "data-internal", $scope.j));
const $input_countChange__OR__input_count = /* @__PURE__ */ _or(8, ($scope) => $x$1($scope, $scope.h, $scope.g));
const $count = /* @__PURE__ */ _const(7, $input_countChange__OR__input_count);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$x$1($scope, $scope.j + 1);
}));

// template.marko
const $counter_content2__x = /* @__PURE__ */ _closure_get(2, ($scope) => _text($scope.a, $scope._.c));
const $counter_content__x = /* @__PURE__ */ _closure_get(2, ($scope) => _text($scope.a, $scope._.c));
const $x__closure = /* @__PURE__ */ _closure($counter_content__x, $counter_content2__x);
const $x = /* @__PURE__ */ _let(2, ($scope) => {
	$count($scope.a, $scope.c);
	$count($scope.b, $scope.c);
	$x__closure($scope);
});
function $countChange($scope) {
	return (_new_x) => {
		$x($scope, _new_x);
	};
}
_resume("a0", $countChange);
