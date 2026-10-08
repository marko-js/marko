// template.marko
const $template = "<div></div><!><button> </button>";
const $walks = " b%b D l";
var styles;
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/7", ($scope) => _text($scope["#text/3"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/1", "<span></span>", " ");
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
