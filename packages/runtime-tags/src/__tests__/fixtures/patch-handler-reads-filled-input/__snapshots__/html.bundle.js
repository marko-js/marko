// template.marko
_shells({ a: "a !a0; D ;<button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n + input.label)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.label,
		f: n
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.label, !_server_guard($scope0_reason, 0));
}, 1);
