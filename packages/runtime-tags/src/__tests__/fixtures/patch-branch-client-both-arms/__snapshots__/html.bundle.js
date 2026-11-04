// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>toggle</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $cg__input_title = _client_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let on = false;
	_html("<main>");
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_html(`<i>${_text_mark($scope2_id, "a", input.title, $wg__input_title)}</i>`);
			$cg__input_title && _patch_render($scope2_id, "a1");
			_scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$fg__input_title && _patch_render($scope0_id, "a0", "e");
	$fg__input_title && _patch_render($scope0_id, "a1", "e");
	_scope($scope0_id, {
		e: input.title,
		f: on
	}) || $fg__input_title && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 0));
}, 1);
