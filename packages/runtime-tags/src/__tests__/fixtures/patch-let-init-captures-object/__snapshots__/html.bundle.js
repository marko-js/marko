// template.marko
_shells({ a: "a !a1; D ;<button> </button>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = { self: _resume(() => a, "a0", $scope0_id) };
	_html(`<button>${_text_resume($scope0_id, "b", typeof a.self)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { c: a });
}, 1);
