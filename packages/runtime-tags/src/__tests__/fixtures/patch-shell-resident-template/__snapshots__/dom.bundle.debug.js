// counter.marko
const $template$3 = "<b> </b>";
const $walks$3 = "D l";
const $setup$3 = () => {};
const $input_label$3 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$3 = ($scope, input) => $input_label$3($scope, input.label);
var counter_default = /*@__PURE__*/ _template("__tests__/counter.marko", $template$3, "D l", 0, $input$3);

// other.marko
const $template$2 = "<i> </i>";
const $walks$2 = "D l";
const $setup$2 = () => {};
const $input_label$2 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label$2($scope, input.label);
var other_default = /*@__PURE__*/ _template("__tests__/other.marko", $template$2, "D l", 0, $input$2);

// tags/chooser.marko
const $template$1 = "<button>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_Tag__OR__input_label = /*@__PURE__*/ _fill_join_if("__tests__/tags/chooser.marko_fill1", "input_label", /*@__PURE__*/ _fill_join_if("__tests__/tags/chooser.marko_fill0", "input_Tag", /*@__PURE__*/ _or(1, ($scope) => $if_content__dynamicTag($scope, $scope._.input_Tag, () => ({ label: $scope._.input_label }))), "#text/1", 0), "#text/1", 0);
const $if_content__input_Tag = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_Tag__OR__input_label);
const $if_content__setup = ($scope) => {
	$if_content__input_Tag._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_Tag__OR__input_label);
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _fill_let("__tests__/tags/chooser.marko_fill2", "show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/tags/chooser.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$show($scope, false);
}
const $input$1 = ($scope, input) => {
	$input_Tag($scope, input.Tag);
	$input_label$1($scope, input.label);
};
const $input_Tag = /*@__PURE__*/ _fill_const("__tests__/tags/chooser.marko_fill0", "input_Tag", $if_content__input_Tag);
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/chooser.marko_fill1", "input_label", $if_content__input_label);
var chooser_default = /*@__PURE__*/ _template("__tests__/tags/chooser.marko", $template$1, $walks$1, $setup$1, $input$1);

// v:counter.marko.register-default.js
_resumed["__tests__/counter.marko"] = counter_default;

// v:other.marko.register-default.js
_resumed["__tests__/other.marko"] = other_default;

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_which__OR__input_label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_label", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_which", /*@__PURE__*/ _shell_or("__tests__/template.marko_0_input_which#4_input_label#5/init", 6, ($scope) => $dynamicTag($scope, $scope.input_which ? counter_default : other_default, () => ({ label: $scope.input_label })))));
const $input_which = /*@__PURE__*/ _const("input_which", ($scope) => {
	$input_Tag($scope["#childScope/1"], $scope.input_which ? counter_default : other_default);
	$input_which__OR__input_label($scope);
});
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$input_label$1($scope["#childScope/1"], $scope.input_label);
	$input_which__OR__input_label($scope);
});
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
}
const $input = ($scope, input) => {
	$input_which($scope, input.which);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
