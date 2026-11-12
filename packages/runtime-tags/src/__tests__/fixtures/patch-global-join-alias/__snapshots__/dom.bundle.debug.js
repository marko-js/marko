// template.marko
const $template = "<button> </button><p> </p><!><!>";
const $walks = " D lD l%c";
const $global_suffix_key = /*@__PURE__*/ _global_key("$global_suffix/9", "suffix");
const $if_content__$global_suffix = /*@__PURE__*/ _global_if("__tests__/template.marko_1_$global_suffix#0:8/subscribe", $global_suffix_key, "#text/3", 0);
const $if_content__copy__OR__$global_suffix = /*@__PURE__*/ _global_or(1, ($scope) => _text($scope["#text/0"], $scope._.count + _global_read($scope.$global, "suffix")), $if_content__$global_suffix);
const $if_content__count = /*@__PURE__*/ _if_closure("#text/3", 0, $if_content__copy__OR__$global_suffix);
const $if_content__setup = $if_content__count;
const $if = /*@__PURE__*/ _if("#text/3", "<b> </b>", "D ", $if_content__setup);
const $global_suffix = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_suffix#8/subscribe", $global_suffix_key);
const $count__OR__$global_suffix = /*@__PURE__*/ _global_or(5, ($scope) => _text($scope["#text/1"], $scope.count + _global_read($scope.$global, "suffix")), $global_suffix);
const $alias__OR__$global_suffix = /*@__PURE__*/ _global_or(6, ($scope) => _text($scope["#text/2"], $scope.count + _global_read($scope.$global, "suffix")), $global_suffix);
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
