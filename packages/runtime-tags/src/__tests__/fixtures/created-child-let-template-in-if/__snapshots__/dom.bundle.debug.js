// tags/card.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "D l", 0, $input$1);

// tags/v:card.marko.register-default.js
_resumed["__tests__/tags/card.marko"] = card_default;

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$2($scope["#childScope/0"], $scope._.input_label));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$setup$2($scope["#childScope/0"]);
	$input_tag($scope["#childScope/0"], card_default);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/outer.marko
const $template = "<button>clear</button><!><!>";
const $walks = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_label__OR__T = /*@__PURE__*/ _or(1, ($scope) => $if_content__dynamicTag($scope, $scope._.T, ($_) => ({ label: $scope._.input_label })));
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_label__OR__T);
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__T._($scope);
};
const $if_content__T = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_label__OR__T);
const $T = /*@__PURE__*/ _let("T/6", $if_content__T);
const $input_tag = $T;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$T($scope, undefined);
}));
const $setup = $setup__script;
const $if = /*@__PURE__*/ _if("#text/1", "<section><!></section>", "D%", $if_content__setup);
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$if($scope, $scope.input_label !== "x" ? 0 : 1);
	$if_content__input_label($scope);
});
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_label($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);
