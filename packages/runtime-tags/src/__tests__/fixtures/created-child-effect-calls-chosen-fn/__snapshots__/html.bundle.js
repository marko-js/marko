// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</span>`);
	_script($scope0_id, "b0", $wg__input_label);
	_scope($scope0_id, { d: input.fn });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_x__OR__input_pick = _write_if($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 3), $wi__input_show__OR__input_pick = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let flag = 0;
	const fa = _resume(function() {
		flag = 1;
		const m = document.querySelector("main");
		m.dataset.a = String(+(m.dataset.a || 0) + 1);
	}, "a0", $scope0_id);
	const fb = _resume(function() {
		flag = 2;
		const m = document.querySelector("main");
		m.dataset.b = String(+(m.dataset.b || 0) + 1);
	}, "a1", $scope0_id);
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_write_guard($scope0_reason, 4) << 1);
			const $childScope = _peek_scope_id();
			child_default({
				label: input.x,
				fn: input.pick ? fa : fb
			});
			_write_if($scope0_reason, 2) && _scope($scope1_id, {
				_: $wi__input_x__OR__input_pick && _scope_with_id($scope0_id),
				a: $wi__input_x__OR__input_pick && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 2), _write_guard($scope0_reason, 3), 0, 0, 1);
	_html(`<p>${_text_resume($scope0_id, "b", flag)}</p></main>`);
	_scope($scope0_id, {
		f: $wi__input_show && input.x,
		g: $wi__input_show && input.pick,
		i: $wi__input_show__OR__input_pick && fa,
		j: $wi__input_show__OR__input_pick && fb
	});
}, 1);
