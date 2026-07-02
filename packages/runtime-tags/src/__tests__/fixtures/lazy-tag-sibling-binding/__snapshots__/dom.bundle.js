// template.marko
const $count = /* @__PURE__ */ _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("c2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + Object.keys($scope.g).length);
}));
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
const $verified = /* @__PURE__ */ _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$verified($scope, String($scope.g($scope.h)));
}));

// child-s.marko
const $verified = /* @__PURE__ */ _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$verified($scope, String($scope.g($scope.h)));
}));
