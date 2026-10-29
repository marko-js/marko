// tags/card.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_x = /*@__PURE__*/ _const("input_x", ($scope) => {
	_return($scope, $scope.input_x + "!");
	_text($scope["#text/0"], $scope.input_x);
});
const $input$2 = ($scope, input) => $input_x($scope, input.x);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, "D l", 0, /*@__PURE__*/ _return_setup($input$2));

// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/wrap.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/wrap.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_x($scope["#childScope/0"], $scope._.input_label))));
const $if_content__setup__script = _script("__tests__/tags/wrap.marko_1", ($scope) => _on($scope["#button/3"], "click", function() {
	console.log($scope.v);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	_var($scope, "#childScope/0", $if_content__v);
	$if_content__setup__script($scope);
};
const $if_content__v = _var_resume("__tests__/tags/wrap.marko_1_v#4/var", /*@__PURE__*/ _const("v", ($scope) => _text($scope["#text/2"], $scope.v)));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button class=log>log</button>`)($template$2), /*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)("D l"), $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_label$1($scope, input.label);
};
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/wrap.marko_fill0", "input_label", $if_content__input_label);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=edit>edit</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $label = _let("label/6", ($scope) => $input_label$1($scope["#childScope/1"], $scope.label));
const $input_label = $label;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$label($scope, $scope.label + "?");
}));
const $setup = $setup__script;
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/1"], input_show);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
