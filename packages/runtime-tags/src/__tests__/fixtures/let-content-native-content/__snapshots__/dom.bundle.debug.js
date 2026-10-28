// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<h1> </h1>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)($walks$1);
const $outer_content__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:4/subscribe");
const $outer_content__setup = $outer_content__input_label;
const $outer_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<em>static <!></em>", "Db%", $outer_content__setup);
const $input_label__closure = /*@__PURE__*/ _closure($outer_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	_text($scope["#text/0"], $scope.input_label);
	$input_label__closure($scope);
});
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$input_content($scope["#childScope/1"], $outer_content($scope));
}
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/card.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $input_content$1 = ($scope, input_content) => _attr_content($scope, "#section/0", input_content);
const $input$1 = ($scope, input) => $input_content$1($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, " b", 0, $input$1);

// tags/outer.marko
const $template = "<button>clear</button><!><!>";
const $walks = " b%c";
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/tags/outer.marko_3*content", "<p>caught <!></p>", "Db%", 0, $catch_content__$params);
const $if_content__o = /*@__PURE__*/ _closure_get("o/6", ($scope) => $input_content$1($scope["#childScope/0"], $scope._._.o), ($scope) => $scope._._, "__tests__/tags/outer.marko_2_o#0:5/subscribe");
const $if_content__setup = $if_content__o;
const $try_content__if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $try_content__o = /*@__PURE__*/ _closure_get("o/6", ($scope) => $try_content__if($scope, $scope._.o ? 0 : 1), 0, "__tests__/tags/outer.marko_1_o#0:5/subscribe");
const $try_content__setup = $try_content__o;
const $o__closure = /*@__PURE__*/ _closure($try_content__o, $if_content__o);
const $o = /*@__PURE__*/ _let("o/5", $o__closure);
const $input_content = $o;
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$o($scope, undefined);
}));
function $setup($scope) {
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_content($scope, input.content);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);
