// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._._, $scope._._.count + $scope.v);
}));
const $for_content__setup = ($scope) => {
	$for_content__setup__script($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $for_content__$params = ($scope, $params2) => $for_content__v($scope, $params2[1]);
const $for_content__v = /*@__PURE__*/ _const("v");
const $if_content__for = /*@__PURE__*/ _for_in("#text/0", "<button class=r> </button>", " D ", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => $if_content__for($scope, [{
	a: 1,
	b: 2
}]);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
function $setup($scope) {
	$count($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
