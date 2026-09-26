// template.marko
const $template = "<button>next</button><!><!>";
const $walks = " b%c";
const $await_content2__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content2__$params = ($scope, $params3) => $await_content2__value($scope, $params3[0]);
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $else_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $else_content__setup = ($scope) => {
	$await_content2($scope);
	$else_content__await_promise($scope, resolveAfter("tab 2", 2));
};
const $placeholder_content = _content("__tests__/template.marko_3*content", "LOADING");
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__tab = /*@__PURE__*/ _closure_get("tab", ($scope) => $if_content__await_promise($scope, $scope._._.tab === 1 ? new Promise(() => {}) : "ready"), ($scope) => $scope._._, "__tests__/template.marko_2_tab#2/subscribe");
const $if_content__setup = ($scope) => {
	$if_content__tab($scope);
	$await_content($scope);
};
const $try_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup, "<!><!><!>", "b%", $else_content__setup);
const $try_content__tab = /*@__PURE__*/ _closure_get("tab", ($scope) => $try_content__if($scope, $scope._.tab < 2 ? 0 : 1), 0, "__tests__/template.marko_1_tab#2/subscribe");
const $try_content__setup = $try_content__tab;
const $tab__closure = /*@__PURE__*/ _closure($try_content__tab, $if_content__tab);
const $tab = /*@__PURE__*/ _let("tab/2", $tab__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$tab($scope, +$scope.tab + 1);
}));
function $setup($scope) {
	$tab($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
