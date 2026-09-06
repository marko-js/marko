// tags/counter-box/index.marko
const $template = "<span>box <!></span>";
const $walks = "Db%l";
const $count = /*@__PURE__*/ _fill_let("b0", 4, ($scope) => {
	_text($scope.a, $scope.e);
	_return($scope, $scope.e);
});
const $input_start = $count;
function $setup($scope) {
	_return_change($scope, $valueChange($scope));
}
const $valueChange = ($scope) => function(v) {
	$count($scope, v);
};
_resume("b0", $valueChange);

// template.marko
const $if_content__count = _var_resume("a0", ($scope, count) => _text($scope.c, count));
const $if_content__setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	_var_change($scope.a, 0);
}));
const $if_content__setup = ($scope) => {
	_var($scope, 0, $if_content__count);
	$setup($scope.a);
	$input_start($scope.a, 1);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button class=reset>r</button>`)($template), /*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
