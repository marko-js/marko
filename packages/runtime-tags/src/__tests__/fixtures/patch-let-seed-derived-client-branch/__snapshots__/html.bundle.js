// template.marko
_shells({ a: "a !a0; b%;<button>toggle</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const d = input.v + "!";
	let on = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", d)} ${_text_resume($scope1_id, "b", input.w, _write_guard($scope0_reason, 2) * 2)}</p>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: input.w,
		g: d,
		h: on
	}) || (_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va1", input.w, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va2", d, !_server_guard($scope0_reason, 1)));
}, 1);
