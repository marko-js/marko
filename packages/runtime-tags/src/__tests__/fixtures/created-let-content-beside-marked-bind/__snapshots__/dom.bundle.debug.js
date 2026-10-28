// tags/label.marko
const $template$3 = "";
const $walks$3 = "";
const $setup$3 = ($_) => {};
const $input__script = _script("__tests__/tags/label.marko_0_input#1", ($scope) => console.log("run", $scope.input.get()));
const $input$3 = /*@__PURE__*/ _const("input", $input__script);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", "", "", 0, $input$3);

// tags/card.marko
const $template$2 = "<section><button>clear</button><!></section>";
const $walks$2 = "D b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = /*@__PURE__*/ _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content$1 = $c;
const $setup__script$1 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$2 = $setup__script$1;
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/outer.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button>x</button>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$2);
const $o = /*@__PURE__*/ _let("o/5", ($scope) => $input_content$1($scope["#childScope/1"], $scope.o));
const $input_content = $o;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$o($scope, undefined);
}));
function $setup$1($scope) {
	$setup$2($scope["#childScope/1"]);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b%c`)("");
const $setup = ($_) => {};
const $outer_content__input_label = /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:6/subscribe");
const $outer_content__setup = $outer_content__input_label;
const $outer_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em>static <!></em>", "Db%", $outer_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $outer_content($scope));
};
const $getTitle2 = ($scope, getTitle) => $input$3($scope["#childScope/0"], { get: getTitle });
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => $getTitle2($scope, $getTitle($scope)));
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($outer_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $getTitle = ($scope) => () => $scope.input_title;
_resumed["__tests__/template.marko_0/getTitle"] = $getTitle;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
