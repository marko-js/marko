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
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const inc = _resume(() => {
		count += input.step;
	}, "a0", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			child_default({ onClick: inc });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 0, 0, 1);
	_html(`<span>${_text_resume($scope0_id, "b", count)}</span>`);
	_scope($scope0_id, {
		e: input.step,
		g: _write_if($scope0_reason, 0) && count,
		i: _write_if($scope0_reason, 1) && inc
	});
}, 1);
