// template.marko
_shells({ a: "a !a1; D ;<button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_other = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	const x = n + input.label;
	_html(`<button>${_text_resume($scope0_id, "b", x)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0", 1, $sg__input_other && 2, "f");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: input.label,
		f: input.other,
		g: n,
		i: x
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.other, !$sg__input_other));
}, 1);
