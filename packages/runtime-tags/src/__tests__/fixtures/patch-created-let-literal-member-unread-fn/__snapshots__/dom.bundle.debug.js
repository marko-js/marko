// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__o = _let("o/1", ($scope) => $if_content__o_label($scope, $scope.o?.label));
const $if_content__input_label = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_label#0:4/setup", "#text/0", 0, ($scope) => $if_content__o($scope, {
	fn() {
		return "f:" + $scope._.input_label;
	},
	label: $scope._.input_label
}));
const $if_content__setup = $if_content__input_label;
const $if_content__o_label = /*@__PURE__*/ _const("o_label", ($scope) => _text($scope["#text/0"], $scope.o_label));
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
