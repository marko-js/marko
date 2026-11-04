// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_label#0:4/setup", "#text/0", 0, ($scope) => $input_opts($scope["#childScope/0"], {
	label: $scope._.input_label,
	n: "SECRET_"
}));
const $if_content__setup = $if_content__input_label;
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/grand.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $input_v__script = _script("__tests__/tags/grand.marko_0_input_v#3", ($scope) => _el_read($scope["#div/0"]).textContent += $scope.input_v);
const $input_v = /*@__PURE__*/ _const("input_v", $input_v__script);
const $input$1 = ($scope, input) => $input_v($scope, input.v);
var grand_default = /*@__PURE__*/ _template("__tests__/tags/grand.marko", $template$1, " b", 0, $input$1);

// tags/child.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup = ($_) => {};
const $o = _fill_let_resume("__tests__/tags/child.marko_0_o#4/fill", "o/4", ($scope) => $o_label($scope, $scope.o?.label));
const $o_label = /*@__PURE__*/ _const("o_label", ($scope) => $input_v($scope["#childScope/0"], $scope.o_label));
const $input_opts = $o;
const $input = ($scope, input) => $input_opts($scope, input.opts);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, $walks, 0, $input);
