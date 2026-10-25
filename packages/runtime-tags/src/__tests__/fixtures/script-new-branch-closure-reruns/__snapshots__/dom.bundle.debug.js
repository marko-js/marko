// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $if_content__count__script = _script("__tests__/template.marko_1_count#0:3", ($scope) => console.log(`closure ${$scope._.count}`));
const $if_content__count = /*@__PURE__*/ _if_closure("#text/2", 0, $if_content__count__script);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => console.log("setup"));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/2", 0, 0, $if_content__setup);
const $count = /*@__PURE__*/ _let("count/3", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if($scope, $scope.count ? 0 : 1);
	$if_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
