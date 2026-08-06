// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global.brand + "]";
	}
});
function $setup($scope) {
	_text($scope["#text/0"], $scope.$global.brand);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
