// template.marko
_shells({ a: "a !a0;E l%b ;<main><h2> </h2><!><button>toggle</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 1);
	const $wg__input_no = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let on = false;
	const label = input.no + "!";
	_html(`<main><h2>${_patch_text($scope0_id, "a", input.yes, void 0, $scope0_reason, 1)}</h2>`);
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_html(`<i>${_text_resume($scope2_id, "a", label, $wg__input_no)}</i>`);
			_scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: input.yes,
		h: on,
		i: label
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va1", input.yes, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", label, !_server_guard($scope0_reason, 0)));
}, 1);
