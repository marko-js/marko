// template.marko
const $template = "<div></div><!><button>inc</button>";
const $walks = " b%b b";
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $if_content__count = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => _text($scope["#text/0"], $scope._.count));
const $if_content__setup = $if_content__count;
const $for = /*@__PURE__*/ _for_until_unkeyed("#text/1", " ", " ", $for_content__setup);
const $count = /*@__PURE__*/ _let("count/6", ($scope) => {
	_attr_class($scope["#div/0"], `c${$scope.count}`);
	$for($scope, [
		$scope.count,
		0,
		1
	]);
	$if_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#div/0", "<span> </span>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
