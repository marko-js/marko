// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 0), $wg__input_a = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	let show = true;
	const Show = { content: _content("a1", ({ v }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__v = _write_guard($scope1_reason, 0), $wi__v = _write_if($scope1_reason, 0);
		const f = _resume(function() {
			return v;
		}, "a0", $scope1_id);
		_if(() => {
			if (input.x) {
				const $scope3_id = _scope_id();
				_html(`<span>${_text_resume($scope3_id, "a", f(), $wg__v)}</span>`);
				($wi__input_x || $wi__v) && _scope($scope3_id, { _: $wi__v && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", $wg__input_x || $wg__v, $wg__input_x, 0, 0, 1);
		_subscribe($wi__input_x && $input_x__closures, _scope($scope1_id, {
			d: $wi__input_x && v,
			e: $wi__input_x && f,
			_: _scope_with_id($scope0_id)
		}), "a2", $wg__input_x);
		$wg__input_x || _resume_branch($scope1_id);
	}, $scope0_id) };
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_set_scope_reason($wg__input_a << 1);
			const $childScope = _peek_scope_id();
			Show.content({ v: input.a });
			_scope($scope2_id, { a: _write_if($scope0_reason, 1) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		e: input.x,
		f: input.a,
		g: show,
		h: $wi__input_x && $input_x__closures
	});
}, 1);
