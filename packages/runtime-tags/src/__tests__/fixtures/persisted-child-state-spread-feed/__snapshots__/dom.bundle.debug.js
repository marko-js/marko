// tags/tabs/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__input_tab_on = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_tab_on));
const $if_content__setup$1 = $if_content__input_tab_on;
const $if$1 = /*@__PURE__*/ _if("#text/0", "<div>a <!></div>", "Db%", $if_content__setup$1, "<span>b</span>");
const $input_tab = ($scope, input_tab) => {
	$input_tab_on($scope, input_tab?.on);
	$if$1($scope, input_tab ? 0 : 1);
};
const $input = ($scope, input) => $input_tab($scope, input.tab);
const $input_tab_on = /*@__PURE__*/ _const("input_tab_on", $if_content__input_tab_on);
var tabs_default = /*@__PURE__*/ _template("__tests__/tags/tabs/index.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = "<main><!><button class=flip>f</button><button class=toggle>t</button></main>";
const $walks = "D%b b l";
const $if_content__on = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$input_tab($scope["#childScope/0"], attrTag({ ...{ on: $scope._.on } }));
	const $tabs_input_spread = { tab: { on: $scope._.on } };
	$input_tab($scope["#childScope/2"], $tabs_input_spread.tab);
});
const $if_content__setup = ($scope) => {
	$if_content__on._($scope);
	$if_content__o._($scope);
};
const $if_content__o = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_tab($scope["#childScope/1"], attrTag({ ...$scope._.o })));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!>`)($template$1, $template$1, $template$1), /*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&b`)("b%c", "b%c", "b%c"), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/3", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $o = /*@__PURE__*/ _const("o", $if_content__o);
const $on = /*@__PURE__*/ _let("on/4", ($scope) => {
	$o($scope, { on: $scope.on });
	$if_content__on($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$on($scope, !$scope.on);
	});
	_on($scope["#button/2"], "click", function() {
		$show($scope, !$scope.show);
	});
});
function $setup($scope) {
	$show($scope, true);
	$on($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
