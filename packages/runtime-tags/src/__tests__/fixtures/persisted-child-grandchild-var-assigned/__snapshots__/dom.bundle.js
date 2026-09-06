// tags/widget/tags/inner/index.marko
const $template$1 = "<button class=bump>+</button>";
const $n = /*@__PURE__*/ _fill_let("c0", 1, ($scope) => _return($scope, $scope.b));
const $setup__script$2 = _script("c1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.b + 1);
}));
function $setup$1($scope) {
	_return_change($scope, $valueChange($scope));
	$n($scope, 1);
	$setup__script$2($scope);
}
const $valueChange = ($scope) => function(v) {
	$n($scope, v);
};
_resume("c0", $valueChange);

// tags/widget/index.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<em> </em><button class=reset>r</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)(" b");
const $v = _var_resume("b0", ($scope, v) => _text($scope.c, v));
const $setup__script$1 = _script("b1", ($scope) => _on($scope.d, "click", function() {
	_var_change($scope.a, 0);
}));
function $setup($scope) {
	_var($scope, 0, $v);
	$setup$1($scope.a);
	$setup__script$1($scope);
}

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
