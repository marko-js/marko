// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $global_other = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_other#4/subscribe", ($scope) => _text($scope["#text/0"], $scope.$global.other), "other");
const $global2__script = _fill_global_script("__tests__/template.marko_0_$global#3", ($scope) => {
	{
		const g = $scope.$global;
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + g.brand + "]";
	}
}, "");
const $global2 = $global2__script;
function $setup($scope) {
	$global2($scope);
	$global_other($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
