// template.marko
_shells({ a: "a !a0;D l D ;<p> </p><button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<p>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</p><button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1", 1, _filled_guard($scope0_reason, 0), "f");
	_scope($scope0_id, {
		f: input.label,
		g: count
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 0));
}, 1);
