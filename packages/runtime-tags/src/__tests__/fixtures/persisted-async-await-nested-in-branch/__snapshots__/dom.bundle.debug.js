// template.marko
const $template = "<main><!><button>interactive</button></main>";
const $walks = "D%b l";
const $await_content2__outer = /*@__PURE__*/ _closure_get("outer", ($scope) => _text($scope["#text/0"], $scope._.outer));
const $await_content2__setup = $await_content2__outer;
const $await_content2__inner = ($scope, inner) => _text($scope["#text/1"], inner);
const $await_content2__$params = ($scope, $params3) => $await_content2__inner($scope, $params3[0]);
const $await_content2 = _resume("__tests__/template.marko_2_#text#0/await", /*@__PURE__*/ _await_content("#text/0", "<em><!>:<!></em>", "D%c%", $await_content2__setup));
const $await_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $await_content__input_inner = /*@__PURE__*/ _closure_get("input_inner", ($scope) => $await_content__await_promise($scope, $scope._._.input_inner), ($scope) => $scope._._);
const $await_content__setup = ($scope) => {
	$await_content__input_inner($scope);
	$await_content2($scope);
};
const $await_content__$params = ($scope, $params2) => $await_content__outer($scope, $params2[0]);
const $await_content__outer__closure = /*@__PURE__*/ _closure($await_content2__outer);
const $await_content__outer = /*@__PURE__*/ _const("outer", $await_content__outer__closure);
const $await_content = _resume("__tests__/template.marko_1_#text#0/await", /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%", $await_content__setup));
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__input_outer = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__await_promise($scope, $scope._.input_outer));
const $if_content__setup = ($scope) => {
	$if_content__input_outer._($scope);
	$await_content($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {}));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_outer($scope, input.outer);
	$input_inner($scope, input.inner);
};
const $input_outer = /*@__PURE__*/ _const("input_outer", $if_content__input_outer);
const $input_inner__closure = /*@__PURE__*/ _closure($await_content__input_inner);
const $input_inner = /*@__PURE__*/ _const("input_inner", $input_inner__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
