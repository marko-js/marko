// note.marko
const $template = "<button> </button>";
const $walks = " D l";
const $n = /*@__PURE__*/ _fill_let("__tests__/note.marko_0_n#2/fill", "n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/note.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
var note_default = /*@__PURE__*/ _template("__tests__/note.marko", $template, $walks, $setup);

// tags/card.marko
const $template$1 = "<button>clear</button><!><!>";
const $walks$1 = " b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $setup__script$1 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script$1;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><button class=toggle>toggle</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%b b`)($walks$1);
const Note = _load_template("__tests__/note.marko", ($_) => import("./note.mjs").then((mod) => mod.default));
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__T = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.T));
const $if_content__setup = $if_content__T;
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_label#0:5/subscribe", "input_label/8", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_0_input_label#5/subscribers", 0);
const $card_content__setup = $card_content__input_label;
const $card_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $card_content__setup);
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $show = _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $T = _let("T/7", $if_content__T);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$show($scope, !$scope.show);
	$T($scope, null);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
	$show($scope, true);
	$T($scope, Note);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
