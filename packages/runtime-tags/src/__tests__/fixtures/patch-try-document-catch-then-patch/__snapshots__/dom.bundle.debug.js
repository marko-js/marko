// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
function boom() {
	throw new Error("boom");
}
const $catch_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_2*content", "<b> </b>", "D ", 0, $catch_content__$params);
const $try_content__input_message = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_message#0:3/subscribe", "input_message/5", ($scope) => _text($scope["#text/0"], $scope._.input_message));
const $try_content__setup = ($scope) => {
	$try_content__input_message($scope);
	$try_content__input_boom($scope);
};
const $try_content__input_boom = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_boom#0:4/subscribe", "input_boom/6", ($scope) => _text($scope["#text/1"], $scope._.input_boom ? boom() : ""));
const $try = /*@__PURE__*/ _try("#text/0", "<em><!><!></em>", "D%b%", $try_content__setup, 0, $catch_content);
const $setup = $try;
const $input = ($scope, input) => {
	$input_message($scope, input.message);
	$input_boom($scope, input.boom);
};
const $input_message__closure = /*@__PURE__*/ _closure($try_content__input_message);
const $input_message = /*@__PURE__*/ _const("input_message", $input_message__closure);
const $input_boom__closure = /*@__PURE__*/ _closure($try_content__input_boom);
const $input_boom = /*@__PURE__*/ _const("input_boom", $input_boom__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
