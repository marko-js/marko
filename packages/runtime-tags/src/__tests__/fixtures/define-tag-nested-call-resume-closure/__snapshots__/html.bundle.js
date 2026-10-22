// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	const E = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<span>${_text_resume($scope1_id, "a", input.x, $wg__input_x)}</span>`);
		_subscribe($wi__input_x && $input_x__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_x);
		$wg__input_x || _resume_branch($scope1_id);
	}, $scope0_id) };
	const D = { content: _content("a2", ({ on }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__on = _write_guard($scope2_reason, 0), $wi__on = _write_if($scope2_reason, 0);
		_if(() => {
			if (on) {
				const $scope3_id = _scope_id();
				E.content({});
				$wi__on && _scope($scope3_id, { _: _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", $wg__on, $wg__on);
		$wi__on && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) };
	let on = false;
	_html(`<button></button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	D.content({ on });
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		e: input.x,
		f: on,
		g: $wi__input_x && $input_x__closures,
		b: _existing_scope($childScope)
	});
}, 1);
