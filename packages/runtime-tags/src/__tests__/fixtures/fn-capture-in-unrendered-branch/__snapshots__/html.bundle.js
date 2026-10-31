// components/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>go</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { d: input.onClick });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_step = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const log = _resume(() => {
		console.log(input.step);
	}, "a0", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			child_default({ onClick: log });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_step && _scope_with_id($scope0_id),
				a: $wi__input_step && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		d: input.step,
		f: log
	});
}, 1);
