// tags/card.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input_label$1 = /*@__PURE__*/ _const("input_label", ($scope) => _return($scope, { fn: $_return($scope) }));
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
const $_return = ($scope) => function() {
	return "f:" + $scope.input_label;
};
_bind_resume("__tests__/tags/card.marko_0/_return input_label", $_return);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", "", "", 0, /*@__PURE__*/ _return_setup($input$1));

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label))));
const $if_content__shown = /*@__PURE__*/ _let("shown/6", ($scope) => _text($scope["#text/3"], $scope.shown));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/4"], "click", function() {
	$if_content__shown($scope, $scope.r.fn());
}));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	_var($scope, "#childScope/0", $if_content__r);
	$if_content__setup__script($scope);
	$if_content__shown($scope, "-");
};
const $if_content__r = _var_resume("__tests__/template.marko_1_r#5/var", /*@__PURE__*/ _const("r", ($scope) => _text($scope["#text/2"], $scope.r.fn())));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<p><!> <!></p><button>show</button>`)(""), /*@__PURE__*/ ((_w0) => `0${_w0}&D%c%l b`)(""), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
