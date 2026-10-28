// tags/host.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $extra_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/host.marko_1_input_label#0:3/init", /*@__PURE__*/ _fill_closure("__tests__/tags/host.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/host.marko_1_input_label#0:3/subscribe"), 0));
const $extra_content__setup__script = _script("__tests__/tags/host.marko_1", ($scope) => console.log("child mount"));
const $extra_content__setup = ($scope) => {
	$extra_content__input_label($scope);
	$extra_content__setup__script($scope);
};
const $extra_content = _content("__tests__/tags/host.marko_1*content", "<em> </em>", "D ", $extra_content__setup);
const $extra__script = _script("__tests__/tags/host.marko_0_extra#4", ($scope) => console.log("parent mount " + typeof $scope.extra, document.querySelector("em")?.textContent));
const $extra = /*@__PURE__*/ _const("extra", ($scope) => {
	$extra__script($scope);
	_attr_content($scope, "#div/0", $scope.extra);
});
function $setup$1($scope) {
	$extra($scope, { content: $extra_content($scope) });
}
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($extra_content__input_label);
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/host.marko_fill0", "input_label", $input_label__closure);
var host_default = /*@__PURE__*/ _template("__tests__/tags/host.marko", $template$1, " b", $setup$1, $input$1);

// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__input_label = /*@__PURE__*/ _fill_signal("input_label __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label)));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
