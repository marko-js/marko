// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $C_content__outer = /*@__PURE__*/ _closure_get_patch("a8", 8, ($scope) => _text($scope.c, $scope._._._.b), ($scope) => $scope._._._, "a20", 2);
const $C_content__setup__script = _script("a7", ($scope) => _on($scope.a, "click", function() {
	console.log($scope._._.e, $scope._._._.b);
}));
const $C_content__setup = ($scope) => {
	$C_content__outer($scope);
	$C_content__inner($scope);
	$C_content__setup__script($scope);
};
const $C_content__inner = /*@__PURE__*/ _closure_get_patch("a9", 10, ($scope) => _text($scope.b, $scope._._.e), ($scope) => $scope._._, "a14", 1);
const $C_content = _content$1("a6", "<u><!><!></u>", " D%b%", $C_content__setup);
const $A_content__outer = /*@__PURE__*/ _closure_get_patch("a2", 8, ($scope) => _text($scope.b, $scope._.b), 0, "a20", 1);
const $A_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	console.log($scope._.b);
}));
const $A_content__setup = ($scope) => {
	$A_content__outer($scope);
	$A_content__setup__script($scope);
};
const $A_content = _content$1("a0", "<b> </b>", " D ", $A_content__setup);
const $B_content__inner = /*@__PURE__*/ _closure_get_patch("a5", 10, ($scope) => _text($scope.b, $scope._.e), 0, "a14", 0);
const $B_content__setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	console.log($scope._.e, $scope._._.b, $scope._._._._.e);
}));
const $B_content__setup = ($scope) => {
	$B_content__inner($scope);
	$B_content__setup__script($scope);
};
const $B_content = _content$1("a3", "<i> </i>", " D ", $B_content__setup);
