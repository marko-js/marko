// template.marko
const $if_content__v__OR__suffix = /*@__PURE__*/ _or(1, ($scope) => _attr_input_value($scope, "a", $scope._.g, $valueChange($scope)));
const $if_content__v = /*@__PURE__*/ _init_if_closure("a5", 0, 0, $if_content__v__OR__suffix);
const $if_content__setup__script = _script("a2", ($scope) => _attr_input_value_script($scope, "a"));
const $if_content__suffix = /*@__PURE__*/ _init_if_closure("a6", 0, 0, $if_content__v__OR__suffix);
const $v = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__v($scope);
});
const $suffix = /*@__PURE__*/ _let(7, $if_content__suffix);
const $setup__script = _script("a3", ($scope) => _on($scope.c, "click", function() {
	$suffix($scope, $scope.h + "!");
}));
const $valueChange = ($scope) => function(x) {
	$v($scope._, x + $scope._.h);
};
_resume("a0", $valueChange);
