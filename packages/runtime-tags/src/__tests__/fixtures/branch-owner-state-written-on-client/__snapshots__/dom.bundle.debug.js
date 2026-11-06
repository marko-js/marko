// template.marko
const $template = "<div></div><section></section><ul></ul><!><!>";
const $walks = " b b b%c";
const $for_content2__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content__count = /*@__PURE__*/ _for_closure("#ul/2", ($scope) => _text($scope["#text/1"], $scope._.count), 9);
const $for_content__setup = $for_content__count;
const $for_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $if_content2__count = /*@__PURE__*/ _if_closure("#section/1", 0, ($scope) => {
	_text($scope["#text/0"], $scope._.count);
	_text($scope["#text/1"], $scope._.count);
});
const $if_content2__setup = $if_content2__count;
const $if_content__count = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => _text($scope["#text/1"], $scope._.count));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, +$scope._.count + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$if_content__setup__script($scope);
};
const $for2 = /*@__PURE__*/ _for_until_unkeyed("#text/3", " ", " ", $for_content2__setup);
const $count = /*@__PURE__*/ _let("count/8", ($scope) => {
	_attr_class($scope["#div/0"], `c${$scope.count}`);
	_attr_class($scope["#section/1"], `c${$scope.count}`);
	_attr_class($scope["#ul/2"], `c${$scope.count}`);
	$for2($scope, [$scope.count]);
	$if_content__count($scope);
	$if_content2__count($scope);
	$for_content__count($scope);
});
function $setup($scope) {
	$count($scope, 1);
}
const $if = /*@__PURE__*/ _if("#div/0", "<button> </button>", " D ", $if_content__setup);
const $if2 = /*@__PURE__*/ _if("#section/1", "<b> </b><i> </i>", "D lD ", $if_content2__setup);
const $input_show = ($scope, input_show) => {
	$if($scope, input_show ? 0 : 1);
	$if2($scope, input_show ? 0 : 1);
};
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/2", "<li><!> <!></li>", "D%c%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
