// template.marko
const $Panel_content__walks = "b%b b";
const $Panel_content__template = "<!><!><button>toggle</button>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks);
const $if_content__label = /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label)));
const $if_content__setup = $if_content__label;
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup);
const $Panel_content__open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "open/5", ($scope) => $Panel_content__if($scope, $scope.open ? 0 : 1));
const $Panel_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$Panel_content__open($scope, !$scope.open);
}));
const $Panel_content__setup = ($scope) => {
	$Panel_content__setup__script($scope);
	$Panel_content__open($scope, false);
};
const $Panel_content__tag_input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "label", $if_content__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => $Panel_content__tag_input_label($scope, $temp.label);
function $setup($scope) {
	$Panel_content__setup($scope["#childScope/0"]);
}
const $input_label = ($scope, input_label) => $Panel_content__tag_input_label($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
