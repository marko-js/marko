// tags/field.marko
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const uid = _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "#text/1", input.label, $wg__input_label)}</label><input${_attr("id", uid)}>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_left = _write_guard($scope0_reason, 1), $wg__input_right = _write_guard($scope0_reason, 2), $wi__input_right = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_right__closures = new Set();
	_if(() => {
		if (input.left) {
			const $scope2_id = _scope_id();
			field_default({ label: "left" });
			_write_if($scope0_reason, 1) && _scope($scope2_id, {}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_left, $wg__input_left);
	_if(() => {
		if (input.right) {
			const $scope3_id = _scope_id();
			field_default({ label: "right" });
			$wi__input_right && _scope($scope3_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_right, $wg__input_right);
	const Repeat = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_if(() => {
			if (input.right) {
				const $scope4_id = _scope_id();
				field_default({ label: "repeat" });
				$wi__input_right && _scope($scope4_id, {}, "__tests__/template.marko", "3:17");
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__input_right, $wg__input_right);
		$wi__input_right && _subscribe($input_right__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_input_right#0:7/subscribe", $wg__input_right);
		$wg__input_right || $wi__input_right && _resume_branch($scope1_id);
	}, $scope0_id) };
	Repeat.content({});
	Repeat.content({});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "ClosureScopes:input_right/8": $wi__input_right && $input_right__closures }, "__tests__/template.marko", 0);
}, 1);
