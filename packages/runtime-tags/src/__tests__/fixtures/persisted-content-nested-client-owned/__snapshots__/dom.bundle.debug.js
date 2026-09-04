// tags/grand/index.marko
const $template$2 = "<div><!></div>";
const $walks$2 = "D%l";
const $setup$2 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag;
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
var grand_default = /*@__PURE__*/ _template("__tests__/tags/grand/index.marko", $template$2, "D%l", 0, $input$2);

// tags/child/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)("D%l");
const $setup$1 = () => {};
const $input_title$1 = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_content = ($scope, input_content) => $input_content$1($scope["#childScope/1"], input_content);
const $input$1 = ($scope, input) => {
	$input_title$1($scope, input.title);
	$input_content($scope, input.content);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $child_content__input_note = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko1", "input_note", /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/0"], $scope._._.input_note), ($scope) => $scope._._), 0);
const $child_content__setup = $child_content__input_note;
const $child_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em> </em>", "D ", $child_content__setup);
const $if_content__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_title$1($scope["#childScope/0"], $scope._.input_title)));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$input_content($scope["#childScope/0"], $child_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $open = /*@__PURE__*/ _let("open/6", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_note($scope, input.note);
};
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $if_content__input_title);
const $input_note__closure = /*@__PURE__*/ _closure($child_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
