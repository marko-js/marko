// template.marko
const $Tree_content__walks = "b%bD l";
const $Tree_content__template = "<!><!><span> </span>";
const $if_content__input_depth = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Tree_content__tag_input_depth($scope.a, $scope._.e - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Tree_content__tag_input_label($scope.a, $scope._.f));
const $Tree_content__if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Tree_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Tree_content__walks), $if_content__setup);
const $Tree_content__tag_input_depth = /*@__PURE__*/ _const(4, ($scope) => {
	$Tree_content__if($scope, $scope.e ? 0 : 1);
	$if_content__input_depth($scope);
});
const $Tree_content__tag_input_label = /*@__PURE__*/ _const(5, ($scope) => {
	_text($scope.b, $scope.f);
	$if_content__input_label($scope);
});
const $depth = /*@__PURE__*/ _let(2, ($scope) => $Tree_content__tag_input_depth($scope.a, $scope.c));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$depth($scope, +$scope.c + 1);
}));
