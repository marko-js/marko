// tags/inner.marko
const $setup = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(0);

// template.marko
const $inner_content = /*@__PURE__*/ _content("a0", "shown content");
const $if_content__setup = ($scope) => {
	/* @__PURE__ */ $setup($scope.a);
	$input_content_direct($scope.a, $inner_content($scope));
};
const $if = /*@__PURE__*/ _if(1, "<!>", /*@__PURE__*/ ((_w0) => `/${_w0}&`)("%b"), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
