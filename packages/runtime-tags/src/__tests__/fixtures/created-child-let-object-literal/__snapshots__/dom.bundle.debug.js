// tags/card.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $o = /*@__PURE__*/ _let("o/4", ($scope) => $o_label($scope, $scope.o?.label));
const $o_label = /*@__PURE__*/ _const("o_label", ($scope) => {
	_return($scope, $scope.o_label + "!");
	_text($scope["#text/0"], $scope.o_label);
});
const $input_opts = $o;
const $input$1 = ($scope, input) => $input_opts($scope, input.opts);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "D l", 0, /*@__PURE__*/ _return_setup($input$1));

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_opts($scope["#childScope/0"], { label: $scope._.input_label }));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/3"], "click", function() {
	console.log($scope.v);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	_var($scope, "#childScope/0", $if_content__v);
	$if_content__setup__script($scope);
};
const $if_content__v = _var_resume("__tests__/template.marko_1_v#4/var", /*@__PURE__*/ _const("v", ($scope) => _text($scope["#text/2"], $scope.v)));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button>log</button>`)($template$1), /*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)("D l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
