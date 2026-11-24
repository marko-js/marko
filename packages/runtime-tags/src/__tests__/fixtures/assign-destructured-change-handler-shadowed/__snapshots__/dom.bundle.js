// tags/child.marko
const $value$1 = /*@__PURE__*/ _let(0, ($scope) => _return($scope, {
	value: $scope.a,
	valueChange: $_return($scope)
}));
const $_return = ($scope) => function(next) {
	$value$1($scope, next);
};
_resumed.b0 = $_return;

// template.marko
const $if_content2__valueChange__script = _script("a7", ($scope) => _on($scope.a, "click", function() {
	$scope._.q($scope.c);
}));
const $if_content2__valueChange = /*@__PURE__*/ _if_closure(12, 0, $if_content2__valueChange__script);
const $Inner_content__valueChange__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$scope._.q($scope.e);
}));
const $Inner_content__valueChange = /*@__PURE__*/ _closure_get(20, $Inner_content__valueChange__script, 0, "a6");
const $for_content__valueChange__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$scope._.q($scope.d);
}));
const $for_content__valueChange = /*@__PURE__*/ _for_closure(10, $for_content__valueChange__script, 20);
const $if_content__valueChange__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$scope._.q($scope.c);
}));
const $if_content__valueChange = /*@__PURE__*/ _if_closure(9, 0, $if_content__valueChange__script);
const $pattern3 = _var_resume("a0", ($scope, $pattern) => {
	$value($scope, $pattern.value);
	$valueChange2($scope, $pattern.valueChange);
});
const $value = ($scope, value) => _text($scope.e, value);
const $valueChange2__closure = /*@__PURE__*/ _closure($Inner_content__valueChange);
const $valueChange2__script = _script("a9", ($scope) => _on($scope.i, "click", function() {
	((valueChange) => {
		$scope.q("param" + valueChange);
	})(1);
}));
const $valueChange2 = /*@__PURE__*/ _const(16, ($scope) => {
	_text($scope.f, typeof $scope.q);
	$if_content__valueChange($scope);
	$for_content__valueChange($scope);
	$valueChange2__closure($scope);
	$if_content2__valueChange($scope);
	$valueChange2__script($scope);
});
const $pattern4 = _var_resume("a1", ($scope, $pattern2) => {
	$onValue($scope, $pattern2.valueChange);
	$renamed($scope, $pattern2.value);
});
const $onValue__script = _script("a8", ($scope) => _on($scope.n, "click", function() {
	((onValue) => {
		$scope.s("renamed" + onValue);
	})(2);
}));
const $onValue = /*@__PURE__*/ _const(18, ($scope) => {
	_text($scope.h, typeof $scope.s);
	$onValue__script($scope);
});
const $renamed = ($scope, renamed) => _text($scope.g, renamed);
