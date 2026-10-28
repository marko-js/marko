// template.marko
_shells({ a: "a !a1; D ;<button> </button>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count + $global$1.brand)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, { c: count });
}, 1);
