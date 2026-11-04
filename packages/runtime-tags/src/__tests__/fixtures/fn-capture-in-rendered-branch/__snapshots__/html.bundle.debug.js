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
	const $scope0_reason = _scope_reason(), $wi__input_step = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const log = _resume(() => {
		console.log(input.step);
	}, "__tests__/template.marko_0/log", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			child_default({ onClick: log });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_step && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_step && _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_scope($scope0_id, {
		input_step: input.step,
		log: _write_if($scope0_reason, 2) && log
	}, "__tests__/template.marko", 0, {
		input_step: ["input.step"],
		log: "2:8"
	});
}, 1);
