// lib.ts
const lib = {
	sep: "!",
	format(value, sep) {
		return value.toUpperCase() + sep;
	}
};

// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<em> </em>";
const $template = "<!><!><button class=toggle>toggle</button>";
const $walks = "b%b b";
const $Panel_content__fmt__OR__sep__OR__label = /*@__PURE__*/ _or_resume("__tests__/template.marko_2_fmt#3_sep#4_label#5/init", 6, ($scope) => _text($scope["#text/0"], $scope.fmt($scope.label, $scope.sep)), 2);
const $Panel_content__fmt = /*@__PURE__*/ _const("fmt", $Panel_content__fmt__OR__sep__OR__label);
const $Panel_content__sep = /*@__PURE__*/ _const("sep", $Panel_content__fmt__OR__sep__OR__label);
const $Panel_content__label = /*@__PURE__*/ _const("label", $Panel_content__fmt__OR__sep__OR__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__fmt($scope, $temp.fmt);
	$Panel_content__sep($scope, $temp.sep);
	$Panel_content__label($scope, $temp.label);
};
const $if_content__input_label = /*@__PURE__*/ _fill_signal("input_label __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$Panel_content__sep($scope["#childScope/0"], lib.sep);
	$Panel_content__fmt($scope["#childScope/0"], lib.format);
	$Panel_content__label($scope["#childScope/0"], $scope._.input_label);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$Panel_content__fmt($scope["#childScope/0"], lib.format);
	$Panel_content__sep($scope["#childScope/0"], lib.sep);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content__setup);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
