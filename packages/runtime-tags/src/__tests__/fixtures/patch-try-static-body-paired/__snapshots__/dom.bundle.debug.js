// template.marko
const $template = "<main><p> </p><!><!></main>";
const $walks = "E l%b%l";
const $catch_content__e_message = ($scope, e_message) => _text($scope["#text/0"], e_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__e_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_4*content", "<s> </s>", "D ", 0, $catch_content__$params);
const $placeholder_content = _content("__tests__/template.marko_2*content", "<i>loading</i>");
const $input_x = ($scope, input_x) => _text($scope["#text/0"], input_x);
const $try = /*@__PURE__*/ _try("#text/1", "<em>static</em>", 0, 0, $placeholder_content);
const $try2 = /*@__PURE__*/ _try("#text/2", "<b>static</b>", 0, 0, 0, $catch_content);
function $setup($scope) {
	$try($scope);
	$try2($scope);
}
const $input = ($scope, input) => $input_x($scope, input.x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
