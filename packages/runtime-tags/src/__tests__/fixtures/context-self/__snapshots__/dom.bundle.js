// tags/labeled-region.marko
const $template = "<!><button>toggle</button><!><!>";
const $walks = "b b%c";
const $context_label = _context_closure("b", ($scope2, $provider) => $if_content__label($scope2, $provider["I"]), "b0");
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.f));
const $if_content__setup = ($scope) => {
	$if_content__input_content._($scope);
	$context_label($scope);
};
const $if_content__label = /*@__PURE__*/ _const(2, ($scope) => _text($scope.b, $scope.c));
const $if = /*@__PURE__*/ _if(1, "<!><!><div class=region-label> </div>", "b%bD l", $if_content__setup);
const $open = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
function $setup($scope) {
	_context_branch($scope, "b");
	$open($scope, true);
	$setup__script($scope);
}
const $input_label = /*@__PURE__*/ _const(4, ($scope) => {
	_attr_class($scope.a, `toggle-${$scope.e}`);
	_context_value($scope, $scope.e, "b");
});
const $input_content = /*@__PURE__*/ _const(5, $if_content__input_content);

// template.marko
const $labeledregion_content2 = _content_resume("a0", "<span>content</span>", "b");
const $labeledregion_content__setup = ($scope) => {
	$setup($scope.a);
	$input_content($scope.a, $labeledregion_content2($scope));
	$input_label($scope.a, "inner");
};
const $labeledregion_content = _content_resume("a1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks), $labeledregion_content__setup);
