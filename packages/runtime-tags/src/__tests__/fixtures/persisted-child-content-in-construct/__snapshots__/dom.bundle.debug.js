// tags/wrap/index.marko
const $template$2 = "<section><!></section>";
const $walks$2 = "D%l";
const $setup$2 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$2 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap/index.marko", $template$2, "D%l", 0, $input$2);

// tags/card/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)("D%l");
const $wrap_content__input_note = /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/0"], $scope._.input_note));
const $wrap_content__setup = $wrap_content__input_note;
const $wrap_content = /*@__PURE__*/ _content("__tests__/tags/card/index.marko_1*content", "<em> </em>", "D ", $wrap_content__setup);
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/card/index.marko0", "n/6", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/tags/card/index.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$1($scope) {
	$input_content_direct($scope["#childScope/2"], $wrap_content($scope));
	$n($scope, 0);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_note$1($scope, input.note);
const $input_note__closure = /*@__PURE__*/ _closure($wrap_content__input_note);
const $input_note$1 = /*@__PURE__*/ _const("input_note", $input_note__closure);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__input_note = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_note$1($scope["#childScope/0"], $scope._.input_note));
const $if_content__setup = ($scope) => {
	$if_content__input_note._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_note($scope, input.note);
};
const $input_note = /*@__PURE__*/ _const("input_note", $if_content__input_note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
