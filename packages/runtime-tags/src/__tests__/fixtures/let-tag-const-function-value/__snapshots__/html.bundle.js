// template.marko
function $fn() {
	return "a";
}
_resume("a0", $fn);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = $fn;
	_html(`<div id=out></div><button></button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_scope($scope0_id, { c: x });
}, 1);
