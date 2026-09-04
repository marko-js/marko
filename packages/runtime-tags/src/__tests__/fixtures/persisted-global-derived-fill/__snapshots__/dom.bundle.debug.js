// template.marko
const $template = "<button>inc</button><!><!>";
const $walks = " b%c";
const $if_content__greeting = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "greeting", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.greeting)));
const $if_content__setup = ($scope) => {
	$if_content__greeting._($scope);
	$if_content__count._($scope);
};
const $if_content__count = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/1"], $scope._.count));
const $greeting = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "greeting", $if_content__greeting);
const $input_name__OR__$global_prefix = ($scope) => {
	$greeting($scope, $scope.$global.prefix + ":" + $scope.input_name);
};
const $input_name = /*@__PURE__*/ _const("input_name", $input_name__OR__$global_prefix);
const $global_prefix = /*@__PURE__*/ _global_join("prefix", "__tests__/template.marko_0_$global_prefix#6/global", ($scope) => {});
const $if = /*@__PURE__*/ _if("#text/1", "<span><!> <!></span>", "D%c%", $if_content__setup);
const $count = /*@__PURE__*/ _let("count/7", ($scope) => {
	$if($scope, $scope.count < 2 ? 0 : 1);
	$if_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$global_prefix($scope, $scope.$global.prefix);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_name($scope, input.name);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
