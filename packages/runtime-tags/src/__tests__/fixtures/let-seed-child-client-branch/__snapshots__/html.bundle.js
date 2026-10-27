// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			let x = input.v;
			_html(`<p>${_escape(x)} ${_text_resume($scope1_id, "b", input.w, $wg__input_w * 2)}</p>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.v,
		f: input.w,
		g: on
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v__OR__input_w = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_v__OR__input_w << 1 | _write_guard($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id();
	child_default({
		v: input.v,
		w: input.w
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
