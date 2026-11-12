// template.marko
const $template = "<button> </button><p> </p><!><!>";
const $walks = " D lD l%c";
const $if_content__copy__OR__$global_suffix = /*@__PURE__*/ _fill_global("__tests__/template.marko_1_copy#0:4_$global_suffix#0:8/subscribe", ($scope) => _text($scope["#text/0"], $scope._.count + _global_read($scope.$global, "suffix")), "suffix");
const $if_content__count = /*@__PURE__*/ _if_closure("#text/3", 0, $if_content__copy__OR__$global_suffix);
const $if_content__setup = $if_content__count;
const $if = /*@__PURE__*/ _if("#text/3", "<b> </b>", "D ", $if_content__setup);
const $count__OR__$global_suffix = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_count#4_$global_suffix#8/subscribe", ($scope) => _text($scope["#text/1"], $scope.count + _global_read($scope.$global, "suffix")), "suffix");
const $alias__OR__$global_suffix = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_alias#3_$global_suffix#8/subscribe", ($scope) => _text($scope["#text/2"], $scope.count + _global_read($scope.$global, "suffix")), "suffix");
const $count = _let("count/4", ($scope) => {
	$if($scope, $scope.count ? 0 : 1);
	$count__OR__$global_suffix($scope);
	$alias__OR__$global_suffix($scope);
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
