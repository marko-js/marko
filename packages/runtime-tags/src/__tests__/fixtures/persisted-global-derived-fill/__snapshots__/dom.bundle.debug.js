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
const $input_name = ($scope, input_name) => $greeting($scope, _global_read($scope.$global, "prefix") + ":" + input_name);
const $if = /*@__PURE__*/ _if("#text/1", "<span><!> <!></span>", "D%c%", $if_content__setup);
const $count = /*@__PURE__*/ _let("count/6", ($scope) => {
	$if($scope, $scope.count < 2 ? 0 : 1);
	$if_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_name($scope, input.name);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
