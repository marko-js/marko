// tags/widget/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_text = ($scope, input_text) => _text($scope["#text/0"], input_text);
const $input = ($scope, input) => $input_text($scope, input.text);
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, "D l", 0, $input);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__brand = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "brand", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_text($scope["#childScope/0"], $scope._.brand)));
const $if_content__setup = $if_content__brand;
const $brand = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "brand", $if_content__brand);
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/4", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
