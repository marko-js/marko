// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(error) {
	throw error;
}
const $if_content__f = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.f()));
const $if_content__setup = $if_content__f;
const $catch_content__setup = ($scope) => {
	$D_content__setup($scope["#childScope/1"]);
	$D_content__on($scope["#childScope/1"], true);
};
const $catch_content__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_3*content", /*@__PURE__*/ ((_w0) => `<b> </b>${_w0}<!>`)($D_content__template), /*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)($D_content__walks), $catch_content__setup, $catch_content__$params);
const $D_content__f = /*@__PURE__*/ _const("f");
const $D_content__setup = ($scope) => $D_content__f($scope, function() {
	return "A";
});
const $D_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content__setup);
const $D_content__on = ($scope, on) => $D_content__if($scope, on ? 0 : 1);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__on($scope, $temp.on);
const $try_content__input_error = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_error#0:3/subscribe", "input_error/4", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"));
const $try_content__setup = $try_content__input_error;
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $setup = $try;
const $input = ($scope, input) => $input_error($scope, input.error);
const $input_error__closure = /*@__PURE__*/ _closure($try_content__input_error);
const $input_error = /*@__PURE__*/ _const("input_error", $input_error__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
