// template.marko
const $Tree_content__walks = "b%bD%c%l";
const $Tree_content__template = "<!><!><span><!>:<!></span>";
const $if_content__input_depth__OR__input_label = /*@__PURE__*/ _or(1, ($scope) => $Tree_content__tag_input($scope.a, {
	depth: $scope._.f - 1,
	label: $scope._.g
}));
const $if_content__input_depth = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_depth__OR__input_label);
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_depth__OR__input_label);
const $Tree_content__tag_input = ($scope, input) => {
	$Tree_content__all($scope, input);
	$Tree_content__input_depth($scope, input.depth);
	$Tree_content__input_label($scope, input.label);
};
const $Tree_content__if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Tree_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Tree_content__walks), $if_content__setup);
const $Tree_content__input_depth = /*@__PURE__*/ _const(5, ($scope) => {
	$Tree_content__if($scope, $scope.f ? 0 : 1);
	$if_content__input_depth($scope);
});
const $Tree_content__input_label = /*@__PURE__*/ _const(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__input_label($scope);
});
const $Tree_content__all = ($scope, input) => _text($scope.c, Object.keys(input).join(","));
const $depth = /*@__PURE__*/ _let(2, ($scope) => $Tree_content__tag_input($scope.a, {
	depth: $scope.c,
	label: "x"
}));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$depth($scope, +$scope.c + 1);
}));
