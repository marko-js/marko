// tags/tree/index.marko
const $template = "<div>d<!><!></div>";
const $walks = "Db%b%l";
const $setup = () => {};
const $if_content__input_depth = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_depth($scope.a, $scope._.e - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	/* @__PURE__ */ $setup($scope.a);
};
const $if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $input_depth = /*@__PURE__*/ _const(4, ($scope) => {
	_text($scope.a, $scope.e);
	$if($scope, $scope.e ? 0 : 1);
	$if_content__input_depth($scope);
});

// template.marko
const $n__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.d + 1);
}));
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$input_depth($scope.c, $scope.d);
	$n__script($scope);
});
