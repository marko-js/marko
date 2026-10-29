// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, $scope._.count + ($scope["#LoopKey"] + 1));
}));
const $for_content__setup = $for_content__setup__script;
const $count = _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
function $setup($scope) {
	$count($scope, 0);
}
const $for = /*@__PURE__*/ _for_to_unkeyed("#text/0", "<button class=r>x</button>", " ", $for_content__setup);
const $input_n = ($scope, input_n) => $for($scope, [
	input_n,
	0,
	1
]);
const $input = ($scope, input) => $input_n($scope, input.n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
