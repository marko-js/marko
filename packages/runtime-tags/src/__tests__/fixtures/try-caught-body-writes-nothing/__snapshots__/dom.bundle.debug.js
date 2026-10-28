// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
function check(x) {
	if (x) throw new Error("boom");
	return 1;
}
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", "<b> </b>", "D ", 0, $catch_content__$params);
const $try_content__input_boom = /*@__PURE__*/ _closure_get("input_boom/4", ($scope) => check($scope._.input_boom), 0, "__tests__/template.marko_1_input_boom#0:3/subscribe");
const $try_content__setup = $try_content__input_boom;
const $try = /*@__PURE__*/ _try("#text/0", "<em>ok</em>", 0, $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => $input_boom($scope, input.boom);
const $input_boom__closure = /*@__PURE__*/ _closure($try_content__input_boom);
const $input_boom = /*@__PURE__*/ _const("input_boom", $input_boom__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
