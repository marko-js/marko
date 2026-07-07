// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for = /*@__PURE__*/ _for_until("#ul/0", "<li> </li>", "D l", $for_content__setup);
const $count = /*@__PURE__*/ _let("count/1", ($scope) => $for($scope, [
	$scope.count,
	0,
	1
]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _el_read($scope["#ul/0"]).classList.add("mounted"));
function $setup($scope) {
	$count($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
