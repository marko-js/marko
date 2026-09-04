// tags/cyc-b.marko
const $template$1 = "<span>b <!></span><!><!>";
const $walks$1 = "Db%l%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_depth$1 = ($scope, input_depth) => {
	_text($scope.a, input_depth);
	$dynamicTag($scope, cyc_a_default, () => ({ depth: input_depth + 1 }));
};

// tags/cyc-a.marko
const $template = "<div>a <!></div><!><!>";
const $walks = "Db%l%c";
const $if_content__input_depth = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_depth$1($scope.a, $scope._.e + 1));
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), $if_content__input_depth);
const $input_depth = /*@__PURE__*/ _const(4, ($scope) => {
	_text($scope.a, $scope.e);
	$if($scope, $scope.e < 2 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input = ($scope, input) => $input_depth($scope, input.depth);
var cyc_a_default = /*@__PURE__*/ _template("b", $template, $walks, 0, $input);

// template.marko
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$input_depth($scope.c, $scope.d);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.d + 1);
}));
