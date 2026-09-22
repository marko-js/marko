// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
function boom() {
	throw new Error("boom");
}
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_3*content", "<b> </b>", "D ", 0, $catch_content__$params);
const $try_content__input_message = /*@__PURE__*/ _closure_get("input_message", ($scope) => _text($scope["#text/0"], $scope._._.input_message), ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__input_message($scope);
	$try_content__input_boom($scope);
};
const $try_content__input_boom = /*@__PURE__*/ _closure_get("input_boom", ($scope) => _text($scope["#text/1"], $scope._._.input_boom ? boom() : ""), ($scope) => $scope._._);
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<em><!><!></em>", "D%b%", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
const $if = /*@__PURE__*/ _if("#main/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_message($scope, input.message);
	$input_boom($scope, input.boom);
	$input_show($scope, input.show);
};
const $input_message__closure = /*@__PURE__*/ _closure($try_content__input_message);
const $input_message = /*@__PURE__*/ _const("input_message", $input_message__closure);
const $input_boom__closure = /*@__PURE__*/ _closure($try_content__input_boom);
const $input_boom = /*@__PURE__*/ _const("input_boom", $input_boom__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
