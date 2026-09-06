// tags/tabs2/index.marko
const $template = "<!><!><!>";
const $if$1 = /*@__PURE__*/ _if(0, "<div>a</div>", 0, 0, "<span>b</span>");
const $input_tab_on = ($scope, input_tab_on) => $if$1($scope, input_tab_on ? 0 : 1);
const $input_tab = ($scope, input_tab) => $input_tab_on($scope, input_tab?.on);

// template.marko
const $if_content__setup = ($scope) => $input_tab($scope.a, false);
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
