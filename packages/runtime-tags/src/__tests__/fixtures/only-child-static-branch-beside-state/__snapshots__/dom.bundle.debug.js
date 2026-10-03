// template.marko
const $template = "<div></div><ul></ul><p><b> </b></p><!><button>inc</button>";
const $walks = " b b E m%b b";
const $for_content__count = /*@__PURE__*/ _for_closure("#ul/1", ($scope) => _text($scope["#text/1"], $scope._.count));
const $for_content__setup = $for_content__count;
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__count = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => _text($scope["#text/0"], $scope._.count));
const $if_content__setup = $if_content__count;
const $for2 = /*@__PURE__*/ _for_until_unkeyed("#text/4", "x");
const $count = /*@__PURE__*/ _let("count/10", ($scope) => {
	_attr_class($scope["#div/0"], `c${$scope.count}`);
	_attr_class($scope["#ul/1"], `c${$scope.count}`);
	_attr_class($scope["#p/2"], `c${$scope.count}`);
	_text($scope["#text/3"], $scope.count);
	$for2($scope, [
		$scope.count,
		0,
		1
	]);
	$if_content__count($scope);
	$for_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/5"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#div/0", "<span> </span>", "D ", $if_content__setup);
const $show = /*@__PURE__*/ _show("#p/2");
const $input_show = ($scope, input_show) => {
	$if($scope, input_show ? 0 : 1);
	$show($scope, input_show);
};
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/1", "<li><!>:<!></li>", "D%c%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
