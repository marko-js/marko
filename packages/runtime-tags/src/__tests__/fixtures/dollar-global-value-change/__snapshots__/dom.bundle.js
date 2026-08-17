// tags/g.marko
const $valueChange = ($scope) => function(next) {
	$scope.$.store = next;
};
_resume("b0", $valueChange);

// template.marko
const $v = _var_resume("a0", ($scope, v) => _text($scope.d, v));
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	_var_change($scope.a, 1);
}));
