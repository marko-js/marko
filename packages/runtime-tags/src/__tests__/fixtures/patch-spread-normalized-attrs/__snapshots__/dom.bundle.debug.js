// template.marko
const $template = "<button class=inc> </button><div>x</div><!><input>";
const $walks = " D l b%b b";
const $if_content__input_link__script = _script("__tests__/template.marko_1_input_link#0:9", ($scope) => _attrs_script($scope, "#a/0"));
const $if_content__input_link = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_link#0:9/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_link", /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => {
	$if_content__input_link__script($scope);
	_attrs($scope, "#a/0", $scope._.input_link);
})));
const $if_content__setup = $if_content__input_link;
const $n = _let("n/11", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_attrs__script = _script("__tests__/template.marko_0_input_attrs#7", ($scope) => _attrs_script($scope, "#div/2"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	$input_attrs__script($scope);
	_attrs($scope, "#div/2", $scope.input_attrs);
});
const $if = /*@__PURE__*/ _if("#text/3", "<a>z</a>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_field__script = _script("__tests__/template.marko_0_input_field#10", ($scope) => _attrs_script($scope, "#input/4"));
const $input_field = /*@__PURE__*/ _const("input_field", ($scope) => {
	$input_field__script($scope);
	_attrs($scope, "#input/4", $scope.input_field, _controllable_input);
});
const $input = ($scope, input) => {
	$input_attrs($scope, input.attrs);
	$input_field($scope, input.field);
	$input_show($scope, input.show);
	$input_link($scope, input.link);
};
const $input_link = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_link", $if_content__input_link);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
