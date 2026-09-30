// template.marko
const $template = "<ul><li>a</li><li>b</li></ul><!><!>";
const $walks = " b%c";
const $if = /*@__PURE__*/ _if("#text/1", "<p>menu</p>");
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#ul/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $show = /*@__PURE__*/ _show("#ul/0");
const $input_items = $show;
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
