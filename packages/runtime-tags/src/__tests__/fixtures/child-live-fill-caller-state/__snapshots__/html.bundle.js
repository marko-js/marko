// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_suffix = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const fmt = _resume((v) => v + input.suffix, "b0", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(_text_resume($scope1_id, "a", fmt("x"), $wg__input_suffix));
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		d: input.suffix,
		f: fmt
	});
});

// tags/mid.marko
var mid_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let s = "!";
	_set_scope_reason(10 | _write_guard($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	child_default({
		suffix: s,
		show: input.show
	});
	_html(`<button class=s>s</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, {
		f: s,
		a: _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	mid_default({ show });
	_html(`<button class=show>show</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: show,
		a: _existing_scope($childScope)
	});
}, 1);
