// template.marko
const $template = "<div><!><select><option value=a>a</option></select><button>Swap</button></div>";
const $walks = "D%b b l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $tag = /*@__PURE__*/ _let("tag/3", ($scope) => $dynamicTag($scope, $scope.tag));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_select_value_script($scope, "#select/1");
	_on($scope["#button/2"], "click", function() {
		$tag($scope, $scope.tag === "input" ? "br" : "input");
	});
});
function $setup($scope) {
	_attr_select_value($scope, "#select/1", void 0, $valueChange($scope));
	$tag($scope, "input");
	$setup__script($scope);
}
const $valueChange = ($scope) => function(next) {
	$tag($scope, next);
};
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
