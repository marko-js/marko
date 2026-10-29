// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom() {
	throw new Error("boom");
}
const $catch_content__x = /*@__PURE__*/ _closure_get("x/7", ($scope) => _text($scope["#text/0"], $scope._.x));
const $catch_content__setup = $catch_content__x;
const $catch_content = _content("__tests__/template.marko_2*content", "<b> </b>", "D ", $catch_content__setup);
const $try_content__input_show = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_show#0:4/init", /*@__PURE__*/ _closure_get("input_show/6", ($scope) => _text($scope["#text/0"], $scope._.input_show ? boom() : "ok"), 0, "__tests__/template.marko_1_input_show#0:4/subscribe"));
const $try_content__setup = $try_content__input_show;
const $x__closure = /*@__PURE__*/ _closure($catch_content__x);
const $x = /*@__PURE__*/ _let("x/5", $x__closure);
const $input_v = $x;
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_show($scope, input.show);
};
const $input_show__closure = /*@__PURE__*/ _closure($try_content__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
