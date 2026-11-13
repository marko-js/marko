// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a3: "a3;b%;<!><!><!>",
	a2: "a2 a1 a5!a0; D ;<button> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $sel_id__closures = /* @__PURE__ */ new Set();
	const sizes = [{ id: "s" }, { id: "m" }];
	let sel = sizes[0];
	_if(() => {
		if (input.b) {
			const $scope1_id = _scope_id();
			_for_of(sizes, (size) => {
				const $scope2_id = _scope_id();
				_html(`<button${size.id === sel.id ? " class=on" : ""}>${_text_mark($scope2_id, "b", size.id, 1, 0, 0)}</button>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_patch_write($scope2_id, "wd", size, 1);
				_patch_write($scope2_id, "we", size?.id, 1);
				_subscribe($sel_id__closures, _scope($scope2_id, {
					d: size,
					e: size?.id,
					_: _scope_with_id($scope1_id)
				}), "a1");
			}, 0, $scope1_id, "a", 1, 1, 1, 0, 0, "a2", 0, 0);
			!_client_guard($scope0_reason, 0) && _unfilled_if() && _patch_write($scope0_id, "we", sizes);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_b, 1, 0, 0, ["a3"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 0) && sizes,
		h: _write_if($scope0_reason, 0) && sel?.id,
		j: $sel_id__closures
	});
	$wg__input_b || _resume_branch($scope0_id);
}, 1);
