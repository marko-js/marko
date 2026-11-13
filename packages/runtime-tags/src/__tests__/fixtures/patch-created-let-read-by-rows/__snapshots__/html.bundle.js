// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: "a2 !;b%;<!><!><!>",
	a1: "a1 a5!a0; D ;<button> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const sizes = [{ id: "s" }, { id: "m" }];
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let sel = sizes[0];
			_for_of(sizes, (size) => {
				const $scope2_id = _scope_id();
				_html(`<button${size.id === (sel && sel.id) ? " class=on" : ""}>${_text_mark($scope2_id, "b", size.id, 1, 0, 0)}</button>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_patch_write($scope2_id, "wd", size, 1);
				_patch_write($scope2_id, "we", size?.id, 1);
				_scope($scope2_id, {
					d: size,
					e: size?.id,
					_: _scope_with_id($scope1_id)
				});
			}, 0, $scope1_id, "a", 1, 1, 1, 0, 0, "a1", 0, 0);
			!$cg__input_show && _unfilled_if() && _patch_write($scope0_id, "we", sizes);
			!$cg__input_show && _unfilled_if() && _patch_write($scope0_id, "wf", sizes[0]);
			_patch_fill($scope1_id, "va3", sel, 1);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 0) && sizes,
		f: _unfilled_if($scope0_reason, 0) && sizes[0]
	});
}, 1);
