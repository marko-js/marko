// tags/my-tag.marko
const $template = "<!><!><span> </span>";
const $walks = "b%bD l";
const $if_content__input_value$1 = /*@__PURE__*/ _if_closure_patch("b0", 0, 0, ($scope) => _text($scope.a, $scope._.e));
const $if$1 = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__input_value$1);
const $open = _fill_let("b2", 5, ($scope) => $if$1($scope, $scope.f ? 0 : 1));
function $setup($scope) {
	$open($scope, true);
}
const $input_value__script = _script_patch("b1 e", ($scope) => console.log("value", $scope.e));
const $input_value = /*@__PURE__*/ _const(4, ($scope) => {
	$if_content__input_value$1($scope);
	_text($scope.b, $scope.e);
	$input_value__script($scope);
});

// template.marko
const $if_content__input_value = /*@__PURE__*/ _if_closure_patch("a0", 1, 0, ($scope) => $input_value($scope.a, $scope._.e));
const $if_content__setup = ($scope) => {
	$if_content__input_value._($scope);
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks), $if_content__setup);
const $show = _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.f);
}));
