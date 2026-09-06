// tags/widget/index.marko
const $template = "<!><!><!>";
const $if$1 = /*@__PURE__*/ _if(0, "<em>open</em>");
const $input_open = ($scope, input_open) => $if$1($scope, input_open ? 0 : 1);

// template.marko
const $if_content__input_o = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_open($scope.a, $scope._.e)));
const $if_content__setup = $if_content__input_o;
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.f);
}));
