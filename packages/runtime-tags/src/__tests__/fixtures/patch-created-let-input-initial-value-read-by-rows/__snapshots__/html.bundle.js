// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: "a2 !;b%;<!><!><!>",
	a1: "a1 a7!a0; D%b%;<button><!><!></button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_i = _unfilled_if($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_i2 = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const items = [1, 2];
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $fg__input_i = _filled_guard($scope0_reason, 2);
			let sel = items[input.i];
			_for_of(items, (item) => {
				const $scope2_id = _scope_id();
				_html(`<button>${_text_mark($scope2_id, "b", item === sel ? "*" : "")}${_text_mark($scope2_id, "c", item, 2, 0, 0)}</button>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_patch_write($scope2_id, "we", item, 1);
				_scope($scope2_id, {
					e: item,
					_: _scope_with_id($scope1_id)
				});
			}, 0, $scope1_id, "a", 1, 1, 1, 0, 0, "a1", 0, 0);
			!_client_guard($scope0_reason, 0) && _unfilled_if() && _patch_write($scope0_id, "wf", items);
			_patch_render($scope1_id, "a3", $fg__input_i && ">e", $scope0_reason, 2);
			$fg__input_i && _patch_fill($scope1_id, "va4", sel, 1);
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	$fg__input_i2 && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "a5", "e");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && ($ui__input_show || $ui__input_i) && input.i,
		f: (_unfilled_if($scope0_reason, 0) || $ui__input_i) && items
	}) || $fg__input_i2 && $ui__input_show && _patch_write($scope0_id, "xe", input.i, !_server_guard($scope0_reason, 2));
}, 1);
