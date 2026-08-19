// tags/widget/index.marko
const $template = "<!><!><!>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_renderer = $dynamicTag;

// template.marko
const $if_content__input_renderer = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_renderer($scope.a, $scope._.e)));
const $if_content__setup = $if_content__input_renderer;
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
