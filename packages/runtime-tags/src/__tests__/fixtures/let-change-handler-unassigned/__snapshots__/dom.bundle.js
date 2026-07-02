// tags/child.marko
const $value = /* @__PURE__ */ _let_change(6, ($scope) => _text($scope.a, $scope.g));
const $input_initial__OR__input_onValue = /* @__PURE__ */ _or(5, ($scope) => $value($scope, $scope.d, $scope.e));
const $initial$1 = /* @__PURE__ */ _const(3, $input_initial__OR__input_onValue);

// template.marko
const $initial = /* @__PURE__ */ _let(2, ($scope) => $initial$1($scope.a, $scope.c));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$initial($scope, $scope.c + 1);
}));
function $onValue() {}
_resume("a0", $onValue);
