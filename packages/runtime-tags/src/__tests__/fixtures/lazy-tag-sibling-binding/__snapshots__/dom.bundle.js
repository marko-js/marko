// template.marko
const $shared__OR__count = /* @__PURE__ */ _or(9, _script("c2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + Object.keys($scope.g).length);
})));
const $count = /* @__PURE__ */ _let(8, ($scope) => {
	_text($scope.b, $scope.i);
	$shared__OR__count($scope);
});
function $isInner($scope) {
	return function(o) {
		return o === Object.values($scope.g)[0];
	};
}
function $isShared($scope) {
	return function(o) {
		return o === $scope.g;
	};
}
_resume("c1", $isInner);
_resume("c0", $isShared);

// child-b.marko
const $isInner__OR__inner = /* @__PURE__ */ _or(8, _script("a0", ($scope) => _on($scope.a, "click", function() {
	$verified($scope, String($scope.g($scope.h)));
})));
const $verified = /* @__PURE__ */ _let(9, ($scope) => _text($scope.b, $scope.j));

// child-s.marko
const $isShared__OR__holder = /* @__PURE__ */ _or(8, _script("b0", ($scope) => _on($scope.a, "click", function() {
	$verified($scope, String($scope.g($scope.h)));
})));
const $verified = /* @__PURE__ */ _let(9, ($scope) => _text($scope.b, $scope.j));
