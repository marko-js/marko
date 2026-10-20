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
const $template = "<!><!><button class=toggle>toggle</button>";
const $walks = "b%b b";
const $Panel_content__props = ($scope, props) => _text($scope["#text/0"], props.fmt(props.label));
const $Panel_content__$params = ($scope, $params2) => $Panel_content__props($scope, $params2[0]);
const $if_content__input_label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Panel_content__props($scope["#childScope/0"], {
	fmt: lib.format,
	label: $scope._.input_label
})));
const $if_content__setup = $if_content__input_label;
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
