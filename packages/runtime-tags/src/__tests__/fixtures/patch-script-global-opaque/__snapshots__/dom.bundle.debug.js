// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $global_other_key = /*@__PURE__*/ _global_key("$global_other/2", "other");
const $global_other = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_other#4/subscribe", $global_other_key, ($scope) => _text($scope["#text/0"], $scope.$global.other));
const $global_key = /*@__PURE__*/ _global_key("$global/3/1");
const $global2 = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global#3/subscribe", $global_key, ($scope) => $global2__script($scope));
const $global2__script = _global_script("__tests__/template.marko_0_$global#3", ($scope) => {
	{
		const g = $scope.$global;
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + g.brand + "]";
	}
}, $global2);
function $setup($scope) {
	$global2($scope);
	$global_other($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
