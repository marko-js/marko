// tags/tabs/index.marko
const $template = "<!><!><!>";
const $if_content__input_tab_on = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $if$1 = /*@__PURE__*/ _if(0, "<div>a <!></div>", "Db%", $if_content__input_tab_on, "<span>b</span>");
const $input_tab = ($scope, input_tab) => {
	$input_tab_on($scope, input_tab?.on);
	$if$1($scope, input_tab ? 0 : 1);
};
const $input_tab_on = /*@__PURE__*/ _const(4, $if_content__input_tab_on);

// template.marko
const $if_content__on = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_tab($scope.a, attrTag({ on: $scope._.e })));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__on);
const $show = /*@__PURE__*/ _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $on = /*@__PURE__*/ _let(4, $if_content__on);
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$on($scope, !$scope.e);
	});
	_on($scope.c, "click", function() {
		$show($scope, !$scope.d);
	});
});
