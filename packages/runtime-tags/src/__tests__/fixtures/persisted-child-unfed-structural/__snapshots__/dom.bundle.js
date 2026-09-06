// tags/badge/index.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $if$1 = /*@__PURE__*/ _if(0, "<em>on</em>");
const $input_open = ($scope, input_open) => $if$1($scope, input_open ? 0 : 1);
const $input_text = ($scope, input_text) => _text($scope.b, input_text);

// template.marko
const $if_content__input_a = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_text($scope.a, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
	$input_open($scope.a);
	$input_open($scope.b, true);
};
const $if_content__input_b = /*@__PURE__*/ _fill_join("a1", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_text($scope.b, $scope._.f)));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}`)($template, $template), /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&`)($walks, $walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.g);
}));
