// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(m) {
	throw new Error(m);
}
const $placeholder_content = _content("__tests__/template.marko_4*content", "<em>loading</em>");
const $catch_content = _content("__tests__/template.marko_3*content", "<em>caught</em>");
const $try_content2__input_err = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_err#0:3/subscribe", "input_err/4", ($scope) => _text($scope["#text/0"], $scope._._.input_err ? boom($scope._._.input_err) : "ok"), ($scope) => $scope._._);
const $try_content2__setup = $try_content2__input_err;
const $try_content__try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content2__setup, $placeholder_content);
const $try_content__setup = $try_content__try;
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $setup = $try;
const $input = ($scope, input) => $input_err($scope, input.err);
const $input_err__closure = /*@__PURE__*/ _closure($try_content2__input_err);
const $input_err = /*@__PURE__*/ _const("input_err", $input_err__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
