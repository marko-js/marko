// tags/child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $o = _fill_let_resume("__tests__/tags/child.marko_0_o#4/fill", "o/4", ($scope) => $o_label($scope, $scope.o?.label));
const $o_label__script = _script("__tests__/tags/child.marko_0_o_label#5", ($scope) => _el_read($scope["#div/0"]).textContent += $scope.o_label);
const $o_label = /*@__PURE__*/ _const("o_label", $o_label__script);
const $input_opts = $o;
const $input$1 = ($scope, input) => $input_opts($scope, input.opts);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = "<button class=inc> </button><!><!>";
const $walks = " D l%c";
const $if_content__count = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_count#0:6/setup", "#text/2", 0, ($scope) => $input_opts($scope["#childScope/0"], {
	label: "v" + $scope._.count,
	n: "SECRET_"
}));
const $if_content__setup = $if_content__count;
const $count = _let("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
