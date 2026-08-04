// tags/tree/index.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__input_depth = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_depth($scope.a, $scope._.d - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	_var($scope, 0, $if_content__nested);
};
const $if_content__nested = _var_resume("b0", ($scope, nested) => _text($scope.c, nested));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<div>nested <!></div>`)($template), /*@__PURE__*/ ((_w0) => `b0${_w0}&Db%l`)("b%c"), $if_content__setup);
const $input_depth = /*@__PURE__*/ _const(3, ($scope) => {
	_return($scope, $scope.d);
	$if($scope, $scope.d ? 0 : 1);
	$if_content__input_depth($scope);
});

// template.marko
const $n = /*@__PURE__*/ _let(4, ($scope) => $input_depth($scope.b, $scope.e));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.e + 1);
}));
const $total = _var_resume("a0", ($scope, total) => _text($scope.d, total));
