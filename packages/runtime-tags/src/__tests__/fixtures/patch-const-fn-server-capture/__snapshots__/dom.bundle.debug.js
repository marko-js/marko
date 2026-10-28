// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_text__OR__fmt = /*@__PURE__*/ _fill_signal("input_text __tests__/template.marko_fill0 __tests__/template.marko_fill0/unpatched,fmt __tests__/template.marko_fill1 __tests__/template.marko_fill1/unpatched", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_text#0:5_fmt#0:6/init", 1, ($scope) => _html($scope, $scope._.fmt($scope._.input_text), "#text/0")), _if_closure, "#text/0", 0);
const $if_content__input_text = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_text__OR__fmt);
const $if_content__setup = ($scope) => {
	$if_content__input_text._($scope);
	$if_content__fmt._($scope);
};
const $if_content__fmt = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_text__OR__fmt);
const $fmt2 = /*@__PURE__*/ _const("fmt", $if_content__fmt);
const $input_decor = /*@__PURE__*/ _const("input_decor", ($scope) => $fmt2($scope, $fmt($scope)));
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_decor($scope, input.decor);
	$input_show($scope, input.show);
	$input_text($scope, input.text);
};
const $input_text = /*@__PURE__*/ _const("input_text", $if_content__input_text);
const $fmt = ($scope) => function(text) {
	return text + $scope.input_decor.mark();
};
_bind_resume("__tests__/template.marko_0/fmt input_decor", $fmt);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
