// components/child.marko
var child_default = _template("__tests__/components/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>go</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/components/child.marko_0_input_onClick#3");
	_scope($scope0_id, { input_onClick: input.onClick }, "__tests__/components/child.marko", 0, { input_onClick: ["input.onClick"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const inc = _resume(() => {
		count += input.step;
	}, "__tests__/template.marko_0/inc", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			child_default({ onClick: inc });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1), 0, 0, 1);
	_html(`<span>${_text_resume($scope0_id, "#text/1", count)}</span>`);
	_scope($scope0_id, {
		input_step: input.step,
		count: _write_if($scope0_reason, 0) && count,
		inc: _write_if($scope0_reason, 1) && inc
	}, "__tests__/template.marko", 0, {
		input_step: ["input.step"],
		count: "2:6",
		inc: "3:8"
	});
}, 1);
