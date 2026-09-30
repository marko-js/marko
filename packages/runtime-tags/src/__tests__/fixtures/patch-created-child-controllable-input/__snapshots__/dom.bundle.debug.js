// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/demo-card.marko
const $template$1 = "<button>tab=<!></button>";
const $walks$1 = " Db%l";
const $selected = /*@__PURE__*/ _fill_let_change("__tests__/tags/demo-card.marko_fill0", "selected/7", ($scope) => _text($scope["#text/1"], String($scope.selected)));
const $input_tab__OR__input_tabChange = /*@__PURE__*/ _init_or("__tests__/tags/demo-card.marko_0_input_tab#4_input_tabChange#5/init", 6, ($scope) => $selected($scope, $scope.input_tab, $scope.input_tabChange));
const $input_tab = /*@__PURE__*/ _const("input_tab", $input_tab__OR__input_tabChange);
const $input_tabChange = /*@__PURE__*/ _const("input_tabChange", $input_tab__OR__input_tabChange);
const $setup__script = _script("__tests__/tags/demo-card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$selected($scope, +$scope.selected + 1);
}));
const $setup$1 = $setup__script;
const $input = ($scope, input) => {
	$input_tab($scope, input.tab);
	$input_tabChange($scope, input.tabChange);
};
var demo_card_default = /*@__PURE__*/ _template("__tests__/tags/demo-card.marko", $template$1, $walks$1, $setup$1, $input);

// tags/page-b.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $tab = /*@__PURE__*/ _fill_let("__tests__/tags/page-b.marko_fill0", "tab/1", ($scope) => $input_tab($scope["#childScope/0"], $scope.tab));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_tabChange($scope["#childScope/0"], $tabChange($scope));
	$tab($scope, 0);
}
const $tabChange = ($scope) => (_new_tab) => {
	$tab($scope, _new_tab);
};
_resumed["__tests__/tags/page-b.marko_0/tabChange"] = $tabChange;
var page_b_default = /*@__PURE__*/ _template("__tests__/tags/page-b.marko", $template, $walks, $setup);
