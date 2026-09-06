// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise", ($scope) => $try_content__await_promise($scope, $scope._.input_promise));
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $catch_content__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => _text($scope["#text/0"], $scope._.input_title));
const $catch_content__setup = $catch_content__input_title;
const $catch_content = _content_resume("__tests__/template.marko_1*content", "<em> </em>", "D ", $catch_content__setup);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_promise($scope, input.promise);
};
const $input_title__closure = /*@__PURE__*/ _closure($catch_content__input_title);
const $input_title = /*@__PURE__*/ _const("input_title", $input_title__closure);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
