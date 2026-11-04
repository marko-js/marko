// template.marko
_shells({ a: "a !a2;E l%b ;<main><h2> </h2><!><button>toggle</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 1);
	const $wg__input_no = _write_guard($scope0_reason, 0), $fg__input_yes = _filled_guard($scope0_reason, 1), $fg__input_no = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let on = false;
	const label = input.no + "!";
	_html(`<main><h2>${_text_mark($scope0_id, "a", input.yes, 1, $scope0_reason, 1)}</h2>`);
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_html(`<i>${_text_mark($scope2_id, "a", label, $wg__input_no)}</i>`);
			_client_guard($scope0_reason, 0) && _patch_render($scope2_id, "a1");
			_scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "c")}</main>`);
	_script($scope0_id, "a2");
	$fg__input_yes && _patch_render($scope0_id, "a0", "g");
	$fg__input_no && _patch_render($scope0_id, "a1", "i");
	_scope($scope0_id, {
		g: input.yes,
		h: on,
		i: label
	}) || ($fg__input_yes && _patch_write($scope0_id, "xg", input.yes, !_server_guard($scope0_reason, 1)), $fg__input_no && _patch_write($scope0_id, "xi", label, !_server_guard($scope0_reason, 0)));
}, 1);
