// counter.marko
const $template$5 = "<b> </b>";
const $walks$5 = "D l";
const $setup$5 = ($_) => {};
const $input_label$3 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$5 = ($scope, input) => $input_label$3($scope, input.label);
var counter_default = /*@__PURE__*/ _template("__tests__/counter.marko", $template$5, "D l", 0, $input$5);

// other.marko
const $template$4 = "<i> </i>";
const $walks$4 = "D l";
const $setup$4 = ($_) => {};
const $input_label$2 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$4 = ($scope, input) => $input_label$2($scope, input.label);
var other_default = /*@__PURE__*/ _template("__tests__/other.marko", $template$4, "D l", 0, $input$4);

// tags/chooser.marko
const $template$3 = "<button>toggle</button><!><!>";
const $walks$3 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_Tag__OR__input_label = /*@__PURE__*/ _or(1, ($scope) => $if_content__dynamicTag($scope, $scope._.input_Tag, ($_) => ({ label: $scope._.input_label })));
const $if_content__input_Tag = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_Tag__OR__input_label);
const $if_content__setup$1 = ($scope) => {
	$if_content__input_Tag._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_Tag__OR__input_label);
const $if$1 = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $show = /*@__PURE__*/ _let("show/6", ($scope) => $if$1($scope, $scope.show ? 0 : 1));
const $setup__script$2 = _script("__tests__/tags/chooser.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup$3($scope) {
	$show($scope, false);
	$setup__script$2($scope);
}
const $input$3 = ($scope, input) => {
	$input_Tag($scope, input.Tag);
	$input_label$1($scope, input.label);
};
const $input_Tag = /*@__PURE__*/ _const("input_Tag", $if_content__input_Tag);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var chooser_default = /*@__PURE__*/ _template("__tests__/tags/chooser.marko", $template$3, $walks$3, $setup$3, $input$3);

// tags/card.marko
const $template$2 = "<section><button>clear</button><!></section>";
const $walks$2 = "D b%l";
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = /*@__PURE__*/ _let("c/5", ($scope) => $dynamicTag$1($scope, $scope.c));
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

// v:counter.marko.register-default.js
_resumed["__tests__/counter.marko"] = counter_default;

// v:other.marko.register-default.js
_resumed["__tests__/other.marko"] = other_default;

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!><!>`)($template$3);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&%c`)($walks$3);
const $outer_content__input_label = /*@__PURE__*/ _closure_get("input_label/9", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:6/subscribe");
const $outer_content__setup = $outer_content__input_label;
const $outer_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em>static <!></em>", "Db%", $outer_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $outer_content($scope));
};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_which__OR__input_label = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_which ? counter_default : other_default, ($_) => ({ label: $scope.input_label })));
const $input_which = /*@__PURE__*/ _const("input_which", ($scope) => {
	$input_Tag($scope["#childScope/1"], $scope.input_which ? counter_default : other_default);
	$input_which__OR__input_label($scope);
});
const $input_label__closure = /*@__PURE__*/ _closure($outer_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$input_label$1($scope["#childScope/1"], $scope.input_label);
	$input_which__OR__input_label($scope);
	$input_label__closure($scope);
});
function $setup($scope) {
	$setup$3($scope["#childScope/1"]);
}
const $if = /*@__PURE__*/ _if("#text/2", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_which($scope, input.which);
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
