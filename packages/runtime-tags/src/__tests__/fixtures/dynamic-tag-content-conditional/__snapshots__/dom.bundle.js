// tags/inner.marko
const $template = "<!><!><!>";
const $setup = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(0);

// template.marko
const $inner_content = /*@__PURE__*/ _content("a0", "shown content", "b");
const $if_content__setup = ($scope) => {
	/* @__PURE__ */ $setup($scope.a);
	$input_content_direct($scope.a, $inner_content($scope));
};
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $show__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
const $show = /*@__PURE__*/ _let(2, ($scope) => {
	$if($scope, $scope.c ? 0 : 1);
	$show__script($scope);
});
