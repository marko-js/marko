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
const $if_content__on = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$input_tab($scope.a, attrTag({ on: $scope._.e }));
	const $tabs_input_spread = { tab: { on: $scope._.e } };
	$input_tab($scope.c, $tabs_input_spread.tab);
});
const $if_content__setup = ($scope) => {
	$if_content__on._($scope);
	$if_content__o._($scope);
};
const $if_content__o = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_tab($scope.b, attrTag({ ...$scope._.f })));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!>`)($template, $template, $template), /*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&b`)("b%c", "b%c", "b%c"), $if_content__setup);
const $show = /*@__PURE__*/ _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $o = /*@__PURE__*/ _const(5, $if_content__o);
const $on = /*@__PURE__*/ _let(4, ($scope) => {
	$o($scope, { on: $scope.e });
	$if_content__on($scope);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$on($scope, !$scope.e);
	});
	_on($scope.c, "click", function() {
		$show($scope, !$scope.d);
	});
});
