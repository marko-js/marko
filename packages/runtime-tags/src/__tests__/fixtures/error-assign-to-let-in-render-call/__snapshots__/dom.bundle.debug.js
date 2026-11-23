// template.marko
const $template = "<div> </div>";
const $walks = "D l";
const $count = /*@__PURE__*/ _let("count/1", ($scope) => _text($scope["#text/0"], (() => {
	$count($scope, 1);
	return $scope.count;
})()));
function $setup($scope) {
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup);
