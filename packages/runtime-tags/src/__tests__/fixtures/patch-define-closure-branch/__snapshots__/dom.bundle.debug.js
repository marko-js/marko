// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>toggle</button>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Panel_content__walks);
const $if_content__label = /*@__PURE__*/ _fill_signal("label __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label)));
const $if_content__setup = $if_content__label;
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup);
const $Panel_content__open = /*@__PURE__*/ _closure_get("open/6", ($scope) => $Panel_content__if($scope, $scope._.open ? 0 : 1), 0, "__tests__/template.marko_1_open#0:5/subscribe");
const $Panel_content__setup = $Panel_content__open;
const $Panel_content__tag_input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "label", $if_content__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => $Panel_content__tag_input_label($scope, $temp.label);
const $open__closure = /*@__PURE__*/ _closure($Panel_content__open);
const $open = /*@__PURE__*/ _let("open/5", $open__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Panel_content__setup($scope["#childScope/0"]);
	$open($scope, false);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => $Panel_content__tag_input_label($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
