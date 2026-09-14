// template.marko
const $foo_content__walks = "D l", $foo_content__template = "<em> </em>";
const $if_content__setup = ($scope) => {
	$foo_content__setup._($scope.a, $scope._);
};
const $foo_content__input_x = /*@__PURE__*/ _fill_join_closure("a0", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.e)), 0);
const $foo_content__setup = /*@__PURE__*/ _child_setup($foo_content__input_x);
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($foo_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($foo_content__walks), $if_content__setup);
const $s = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$s($scope, +$scope.f + 1);
}));
