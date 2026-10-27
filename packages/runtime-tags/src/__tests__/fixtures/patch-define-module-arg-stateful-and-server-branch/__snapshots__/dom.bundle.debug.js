// lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<em> </em>";
const $template = "<!><!><!><button class=toggle>toggle</button>";
const $walks = "b%b%b b";
const $Panel_content__fmt__OR__label = /*@__PURE__*/ _or_resume("__tests__/template.marko_3_fmt#3_label#4/init", 5, ($scope) => _text($scope["#text/0"], $scope.fmt($scope.label)));
const $Panel_content__fmt = /*@__PURE__*/ _const("fmt", $Panel_content__fmt__OR__label);
const $Panel_content__label = /*@__PURE__*/ _const("label", $Panel_content__fmt__OR__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__fmt($scope, $temp.fmt);
	$Panel_content__label($scope, $temp.label);
};
const $if_content2__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:5/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0/unpatched", "input_label", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => {
	$Panel_content__fmt($scope["#childScope/0"], lib.format);
	$Panel_content__label($scope["#childScope/0"], $scope._.input_label);
})));
const $if_content2__setup = ($scope) => {
	$if_content2__input_label._($scope);
	$Panel_content__fmt($scope["#childScope/0"], lib.format);
};
const $if_content__input_label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0 __tests__/template.marko_fill0/unpatched", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$Panel_content__fmt($scope["#childScope/0"], lib.format);
	$Panel_content__label($scope["#childScope/0"], $scope._.input_label);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$Panel_content__fmt($scope["#childScope/0"], lib.format);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content__setup);
const $open = /*@__PURE__*/ _let("open/7", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $if2 = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content2__setup);
const $input_show = ($scope, input_show) => $if2($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", ($scope) => {
	$if_content__input_label($scope);
	$if_content2__input_label($scope);
}, $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
