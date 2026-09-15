// tags/struct/index.marko
const $template = "<!><!><!>";
const $if$1 = /*@__PURE__*/ _if(0, "<div>a</div>", 0, 0, "<span>b</span>");
const $input_mode = ($scope, input_mode) => $if$1($scope, input_mode ? 0 : 1);
const $input = ($scope, input) => $input_mode($scope, input.mode);

// template.marko
const $if_content__setup = ($scope) => $input($scope.a, { mode: false });
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
