// tags/field.marko
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const uid = _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "b", input.label, $wg__input_label)}</label><input${_attr("id", uid)}>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_left = _write_guard($scope0_reason, 1), $wg__input_right = _write_guard($scope0_reason, 2), $wi__input_right = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_right__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.left) {
			const $scope2_id = _scope_id();
			field_default({ label: "left" });
			_write_if($scope0_reason, 1) && _scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_left, $wg__input_left);
	_if(() => {
		if (input.right) {
			const $scope3_id = _scope_id();
			field_default({ label: "right" });
			$wi__input_right && _scope($scope3_id, {});
			return 0;
		}
	}, $scope0_id, "b", $wg__input_right, $wg__input_right);
	const Repeat = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (input.right) {
				const $scope4_id = _scope_id();
				field_default({ label: "repeat" });
				$wi__input_right && _scope($scope4_id, {});
				return 0;
			}
		}, $scope1_id, "a", $wg__input_right, $wg__input_right);
		$wi__input_right && _subscribe($input_right__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_right);
		$wg__input_right || $wi__input_right && _resume_branch($scope1_id);
	}, $scope0_id) };
	Repeat.content({});
	Repeat.content({});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { i: $wi__input_right && $input_right__closures });
}, 1);
