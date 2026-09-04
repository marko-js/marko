// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $global_other = /*@__PURE__*/ _global_join("other", "__tests__/template.marko_0_$global_other#1/global", ($scope, $global_other) => _text($scope["#text/0"], $scope.$global.other));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	{
		const g = $scope.$global;
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + g.brand + "]";
	}
});
function $setup($scope) {
	$global_other($scope, $scope.$global.other);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
