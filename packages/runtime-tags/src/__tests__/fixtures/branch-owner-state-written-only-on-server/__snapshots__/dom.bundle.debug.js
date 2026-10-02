// template.marko
const $template = "<div></div><section></section><!><span> </span>";
const $walks = " b b%bD l";
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $if_content2__count = /*@__PURE__*/ _if_closure("#section/1", 0, ($scope) => _text($scope["#text/1"], $scope._.count));
const $if_content2__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	document.title = "param " + $scope._.count;
}));
const $if_content2__setup = ($scope) => {
	$if_content2__count._($scope);
	$if_content2__setup__script($scope);
};
const $if_content__count = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => _text($scope["#text/1"], $scope._.count));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	document.title = "own " + $scope._.count;
}));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$if_content__setup__script($scope);
};
const $inc = ($scope, inc) => _text($scope["#text/3"], typeof inc);
const $if = /*@__PURE__*/ _if("#div/0", "<button id=own> </button>", " D ", $if_content__setup);
const $for = /*@__PURE__*/ _for_until_unkeyed("#text/2", " ", " ", $for_content__setup);
const $count = /*@__PURE__*/ _let("count/7", ($scope) => {
	_attr_class($scope["#div/0"], `c${$scope.count}`);
	_attr_class($scope["#section/1"], `c${$scope.count}`);
	$inc($scope, () => $count($scope, +$scope.count + 1) - 1);
	$if($scope, $scope.count ? 0 : 1);
	$for($scope, [
		$scope.count,
		0,
		1
	]);
	$if_content__count($scope);
	$if_content2__count($scope);
});
function $setup($scope) {
	$count($scope, 1);
}
const $if2 = /*@__PURE__*/ _if("#section/1", "<button id=param> </button>", " D ", $if_content2__setup);
const $input_show = ($scope, input_show) => $if2($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
