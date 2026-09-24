// template.marko
const $Tree_content__walks = "D%b%l%c", $Tree_content__template = "<span><!><!></span><!><!>";
const $if_content__level = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $Tree_content__level($scope.a, $scope._.f + 1));
const $if_content__setup = ($scope) => {
	$if_content__level._($scope);
	$Tree_content__setup._($scope.a, $scope._._);
};
const $Tree_content__if = /*@__PURE__*/ _if(2, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Tree_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Tree_content__walks), $if_content__setup);
const $Tree_content__depth__OR__level = /*@__PURE__*/ _or(6, ($scope) => $Tree_content__if($scope, $scope.f < $scope._.c ? 0 : 1));
const $Tree_content__depth = /*@__PURE__*/ _closure_get(4, $Tree_content__depth__OR__level, 0, "a1", 2);
const $Tree_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Tree_content__depth($scope);
	$Tree_content__label($scope);
});
const $Tree_content__label = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.d));
const $Tree_content__level = /*@__PURE__*/ _const(5, ($scope) => {
	_text($scope.b, $scope.f);
	$Tree_content__depth__OR__level($scope);
	$if_content__level($scope);
});
const $depth = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($Tree_content__depth));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$depth($scope, +$scope.c + 1);
}));
