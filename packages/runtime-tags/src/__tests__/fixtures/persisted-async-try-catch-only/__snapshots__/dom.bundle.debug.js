// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $catch_content = _content_resume("__tests__/template.marko_2*content", "<em>bad</em>");
const $try_content__input_message = /*@__PURE__*/ _closure_get("input_message", ($scope) => _text($scope["#text/0"], $scope._.input_message));
const $try_content__setup = $try_content__input_message;
const $try = /*@__PURE__*/ _try("#text/0", "<em> </em>", "D ", $try_content__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
const $input = ($scope, input) => $input_message($scope, input.message);
const $input_message__closure = /*@__PURE__*/ _closure($try_content__input_message);
const $input_message = /*@__PURE__*/ _const("input_message", $input_message__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
