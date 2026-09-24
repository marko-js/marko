// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise", ($scope) => $try_content__await_promise($scope, $scope._.input_promise), 0, "__tests__/template.marko_2_input_promise#5/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $placeholder_content__input_title__script = _script("__tests__/template.marko_1_input_title#4", ($scope) => console.log("placeholder shown: " + $scope._.input_title));
const $placeholder_content__input_title = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_title", /*@__PURE__*/ _closure_get("input_title", ($scope) => {
	_text($scope["#text/0"], $scope._.input_title);
	$placeholder_content__input_title__script($scope);
}, 0, "__tests__/template.marko_1_input_title#4/subscribe"), 0);
const $placeholder_content__setup = $placeholder_content__input_title;
const $placeholder_content = _content_resume("__tests__/template.marko_1*content", "<em>loading <!></em>", "Db%", $placeholder_content__setup);
const $input_title__closure = /*@__PURE__*/ _closure($placeholder_content__input_title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", ($scope) => {
	$input_title__closure($scope);
	_text($scope["#text/0"], $scope.input_title);
}, $input_title__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_title($scope, input.title);
};
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
