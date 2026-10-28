// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = input.v;
			let y = _resume((v) => v, "b0")(x);
			_html(`<p>${_text_resume($scope1_id, "a", y + input.w, $wg__input_w)}</p>`);
			_write_if($scope0_reason, 1) && _scope($scope1_id, {
				e: _write_if($scope0_reason, 3) && y,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 1), $wg__input_show, 0, 0, 1);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		e: input.v,
		f: input.w
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let v = input.v;
	_html(`<button class=set>set</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(10 | (_write_guard($scope0_reason, 0) << 5 | _write_guard($scope0_reason, 1) << 7));
	const $childScope = _peek_scope_id();
	child_default({
		show: input.show,
		v,
		w: input.w
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: v,
		b: _existing_scope($childScope)
	});
}, 1);
