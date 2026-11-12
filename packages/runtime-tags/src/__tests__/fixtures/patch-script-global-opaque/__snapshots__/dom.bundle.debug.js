// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $global_other_key = /*@__PURE__*/ _global_key("other");
const $global_other = /*@__PURE__*/ _global_closure($global_other_key, "__tests__/template.marko_0_$global_other#4/subscribe", ($scope) => _text($scope["#text/0"], $scope.$global.other));
function $setup($scope) {
	$global2__script($scope);
	$global_other($scope);
}
const $global_key = /*@__PURE__*/ _global_key();
const $global2 = /*@__PURE__*/ _global_closure($global_key);
const $global2__script = _global_script("__tests__/template.marko_0_$global#3", ($scope) => {
	{
		const g = $scope.$global;
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + g.brand + "]";
	}
}, $global2);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
