// template.marko
const $Child_content__walks = "%c%c", $Child_content__template = "<!> and <!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Child_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Child_content__walks);
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $Child_content2__input_text = /*@__PURE__*/ _closure_get("input_text", ($scope) => _text($scope["#text/0"], $scope._.input_text));
const $Child_content2__setup = $Child_content2__input_text;
const $Child_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2_content", " ", " b", $Child_content2__setup);
const $Child_content__input_text = ($scope, input_text) => _text($scope["#text/0"], input_text);
const $Child_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $Child_content__input_content = $Child_content__dynamicTag;
const $Child_content__$params = ($scope, $params2) => $Child_content__input($scope, $params2[0]);
const $Child_content__input = ($scope, input) => {
	$Child_content__input_text($scope, input.text);
	$Child_content__input_content($scope, input.content);
};
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $Child_content2($scope));
}
const $input_text__closure = /*@__PURE__*/ _closure($Child_content2__input_text);
const $input_text = /*@__PURE__*/ _const("input_text", ($scope) => {
	$Child_content__input_text($scope["#childScope/0"], $scope.input_text);
	$input_text__closure($scope);
});
const $input = ($scope, input) => $input_text($scope, input.text);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
