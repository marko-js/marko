// template.marko
function $fn() {
	return "a";
}
_resume("__tests__/template.marko_0/fn", $fn);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const fn = $fn;
	let x = fn;
	_html(`<div id=out></div><button></button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_x#2");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "2:6" });
}, 1);
