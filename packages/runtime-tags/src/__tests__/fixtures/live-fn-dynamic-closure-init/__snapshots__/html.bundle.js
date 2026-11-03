// tags/panel.marko
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 1), $wi__input_a = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $f2__closures = /* @__PURE__ */ new Set();
	const f = _resume(function() {
		return input.a;
	}, "b0", $scope0_id);
	let out = "";
	_if(() => {
		if (input.y) {
			const $scope1_id = _scope_id();
			forOf([1], (i) => {
				const $scope2_id = _scope_id();
				_html(`<button class=read>${_text_resume($scope2_id, "b", f(), _write_guard($scope0_reason, 0))}</button>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "b1");
				_subscribe($wi__input_a && $f2__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b2");
			});
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_y, $wg__input_y);
	_html(`<output>${_text_resume($scope0_id, "b", out)}</output>`);
	_scope($scope0_id, {
		e: input.a,
		g: f,
		i: $wi__input_a && $f2__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let y = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(8 | _write_guard($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	panel_default({
		a: input.a,
		y
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: y,
		b: _existing_scope($childScope)
	});
}, 1);
