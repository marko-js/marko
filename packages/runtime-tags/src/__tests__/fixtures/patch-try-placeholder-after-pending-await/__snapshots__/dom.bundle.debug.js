// template.marko
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
const $await_content2__b = ($scope, b) => _text($scope["#text/0"], b);
const $await_content2__$params = ($scope, $params3) => $await_content2__b($scope, $params3[0]);
const $placeholder_content = _content("__tests__/template.marko_3*content", "<i>loading</i>");
const $await_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $await_content__$params = ($scope, $params2) => $await_content__a($scope, $params2[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content__input_b = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_b#0:5/init", /*@__PURE__*/ _closure_get("input_b/6", ($scope) => $try_content__await_promise($scope, $scope._.input_b), 0, "__tests__/template.marko_1_input_b#0:5/subscribe"));
const $try_content__setup = ($scope) => {
	$try_content__input_b($scope);
	$await_content2($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$await_content($scope);
	$try($scope);
}
const $input_a = $await_promise;
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_b__closure = /*@__PURE__*/ _closure($try_content__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_b__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
