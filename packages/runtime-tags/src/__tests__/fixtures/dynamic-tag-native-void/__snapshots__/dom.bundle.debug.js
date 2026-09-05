// template.marko
const $template = "<br><p> </p><img src=x.png><input name=a><meta content=description><textarea></textarea><title></title><if>core tag name</if><custom>custom tag name</custom><div>before<!><!><button>inc</button></div>";
const $walks = "bD ld b dDb%b%b l";
const $input_show_direct = /*@__PURE__*/ _dynamic_tag_content("#text/3");
const $count = /*@__PURE__*/ _let("count/9", ($scope) => {
	_text($scope["#text/0"], $scope.count);
	_attr_textarea_value_default($scope, "#textarea/1", `count & ${$scope.count}`);
	_text_content($scope["#title/2"], `count ${_to_text($scope.count)}`);
	_text($scope["#text/4"], $scope.count);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/5"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3");
const $input_show = ($scope, input_show) => $dynamicTag($scope, input_show && "span");
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
