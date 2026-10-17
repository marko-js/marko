// template.marko
const $template = "<button> </button><p> </p><!><!>";
const $walks = " D lD l%c";
const $if_content__copy__$global_suffix = /*@__PURE__*/ _fill_global_join("suffix", "__tests__/template.marko_1_copy#0:4_$global_suffix#0:8", ($scope) => _text($scope["#text/0"], $scope._.count + _global_read($scope.$global, "suffix")));
const $if_content__count = /*@__PURE__*/ _if_closure("#text/3", 0, $if_content__copy__$global_suffix);
const $if_content__setup = $if_content__count;
const $if = /*@__PURE__*/ _if("#text/3", "<b> </b>", "D ", $if_content__setup);
const $count__$global_suffix = /*@__PURE__*/ _fill_global_join("suffix", "__tests__/template.marko_0_count#4_$global_suffix#8", ($scope) => _text($scope["#text/1"], $scope.count + _global_read($scope.$global, "suffix")));
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/4", ($scope) => {
	$alias($scope, $scope.count);
	$if($scope, $scope.count ? 0 : 1);
	$count__$global_suffix($scope);
	$if_content__count($scope);
});
const $alias__$global_suffix = /*@__PURE__*/ _fill_global_join("suffix", "__tests__/template.marko_0_alias#3_$global_suffix#8", ($scope) => _text($scope["#text/2"], $scope.count + _global_read($scope.$global, "suffix")));
const $alias = $alias__$global_suffix;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
