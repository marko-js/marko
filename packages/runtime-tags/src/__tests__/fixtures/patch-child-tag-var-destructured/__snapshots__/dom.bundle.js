// tags/counter/index.marko
const $template = "<span>box <!></span>";
const $walks = "Db%l";
const $count = /*@__PURE__*/ _fill_let("b0", 1, ($scope) => {
	_text($scope.a, $scope.b);
	_return($scope, {
		value: $scope.b,
		valueChange: $_return($scope)
	});
});
function $setup($scope) {
	$count($scope, 1);
}
const $_return = ($scope) => function(v) {
	$count($scope, v);
};
_resume("b0", $_return);

// template.marko
const $if_content__$pattern = _var_resume("a0", ($scope, $pattern) => {
	$if_content__value($scope, $pattern.value);
	$if_content__$valueChange($scope, $pattern.valueChange);
});
const $if_content__value = ($scope, value) => _text($scope.c, value);
const $if_content__$valueChange = /*@__PURE__*/ _const(6, _script("a1", ($scope) => _on($scope.d, "click", function() {
	$scope.g(0);
})));
const $if_content__setup = ($scope) => {
	_var($scope, 0, $if_content__$pattern);
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button class=reset>r</button>`)($template), /*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
