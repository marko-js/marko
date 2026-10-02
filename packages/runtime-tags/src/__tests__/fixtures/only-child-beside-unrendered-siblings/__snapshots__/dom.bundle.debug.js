// template.marko
const $template = "<div></div><button>toggle</button>";
const $walks = " b b";
const $if_content__label = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label));
const $if_content__setup = $if_content__label;
const $if = /*@__PURE__*/ _if("#div/0", "<b> </b>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/2", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $label = /*@__PURE__*/ _const("label");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$label($scope, "shown");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
