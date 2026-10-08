// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
_load_lazy("ready:__tests__/tags/route-pg.marko", () => import("./route-pg.mjs").then(() => {}));
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&");
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/tab-editor.marko
const $template$1 = "<p>sel=<!></p>";
const $walks$1 = "Db%l";
const $setup$1 = () => {};
const $selected = /*@__PURE__*/ _let_change("selected/6", ($scope) => _text($scope["#text/0"], String($scope.selected)));
const $input_tab__OR__input_tabChange = /*@__PURE__*/ _fill_join("__tests__/tags/tab-editor.marko_fill1", "input_tabChange", /*@__PURE__*/ _fill_join("__tests__/tags/tab-editor.marko_fill0", "input_tab", /*@__PURE__*/ _shell_or("__tests__/tags/tab-editor.marko_0_input_tab#3_input_tabChange#4/init", 5, ($scope) => $selected($scope, $scope.input_tab, $scope.input_tabChange))));
const $input_tab = /*@__PURE__*/ _const("input_tab", $input_tab__OR__input_tabChange);
const $input_tabChange = /*@__PURE__*/ _const("input_tabChange", $input_tab__OR__input_tabChange);
const $input = ($scope, input) => {
	$input_tab($scope, input.tab);
	$input_tabChange($scope, input.tabChange);
};
var tab_editor_default = /*@__PURE__*/ _template("__tests__/tags/tab-editor.marko", $template$1, $walks$1, 0, $input);

// tags/route-pg.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $tab = /*@__PURE__*/ _fill_let("__tests__/tags/route-pg.marko_fill0", "tab/2", ($scope) => $input_tab($scope["#childScope/0"], $scope.tab));
const $setup__script = _script("__tests__/tags/route-pg.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$tab($scope, +$scope.tab + 1);
}));
function $setup($scope) {
	$input_tabChange($scope["#childScope/0"], $tabChange($scope));
	$setup__script($scope);
	$tab($scope, 0);
}
const $tabChange = ($scope) => (_new_tab) => {
	$tab($scope, _new_tab);
};
_resumed["__tests__/tags/route-pg.marko_0/tabChange"] = $tabChange;
var route_pg_default = /*@__PURE__*/ _template("__tests__/tags/route-pg.marko", $template, $walks, $setup);
