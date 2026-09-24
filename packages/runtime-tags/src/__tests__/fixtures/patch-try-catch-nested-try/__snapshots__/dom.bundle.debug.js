// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $catch_content2 = _content_resume("__tests__/template.marko_4*content", "<span>inner</span>");
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_3*content", "<span> </span>", "D ", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<strong> </strong>", "D ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content2__input_promise = /*@__PURE__*/ _closure_get("input_promise", ($scope) => $try_content2__await_promise($scope, $scope._._.input_promise), ($scope) => $scope._._, "__tests__/template.marko_2_input_promise#3/subscribe");
const $try_content2__setup = ($scope) => {
	$try_content2__input_promise($scope);
	$await_content($scope);
};
const $try_content__checked = ($scope, checked) => _text($scope["#text/0"], checked);
const $try_content__input = /*@__PURE__*/ _closure_get("input", ($scope) => $try_content__checked($scope, $scope._.input.check()), 0, "__tests__/template.marko_1_input#2/subscribe");
const $try_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content2__setup);
const $try_content__setup = ($scope) => {
	$try_content__input($scope);
	$try_content__try($scope, { catch: attrTag({ content: $catch_content2($scope) }) });
};
const $try = /*@__PURE__*/ _try("#text/0", "<em> </em><!><!>", "D l%", $try_content__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
const $input__closure = /*@__PURE__*/ _closure($try_content__input);
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	$input_promise($scope, $scope.input.promise);
	$input__closure($scope);
});
const $input_promise__closure = /*@__PURE__*/ _closure($try_content2__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
