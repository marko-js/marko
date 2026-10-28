// tags/field.marko
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_uid__OR__input_heading = _write_guard($scope0_reason, 0), $wg__input_uid = _write_guard($scope0_reason, 2), $wg__input_name = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const uid = input.uid || _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "b", input.name, $wg__input_name)}</label>${_el_resume($scope0_id, "a", $wg__input_uid)}<input${_attr("id", uid)}${_attr("aria-describedby", input.heading)}>${_el_resume($scope0_id, "c", $wg__input_uid__OR__input_heading)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const heading = _id();
	_html(`<h1${_attr("id", heading)}>Fields</h1>`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		field_default({
			name: "before",
			heading
		});
		_await($scope1_id, "b", input.promise, (items) => {
			const $scope4_id = _scope_id();
			_for_of(items, (item) => {
				const $scope5_id = _scope_id();
				field_default({
					name: item.key,
					heading
				});
				$wi__input_promise && _scope($scope5_id, { _: _scope_with_id($scope4_id) });
			}, "key", $scope4_id, "a", $wg__input_promise, $wg__input_promise);
			$wi__input_promise && _scope($scope4_id, {});
		}, $wg__input_promise);
		$wi__input_promise && _subscribe($input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		field_default({
			name: "loading",
			heading
		});
		_scope($scope2_id, { _: _scope_with_id($scope0_id) });
		_resume_branch($scope2_id);
	}, (error) => {
		const $scope3_reason = _scope_reason(), $wg__error_message = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_set_scope_reason($wg__error_message << 3 | $wg__error_message << 7);
		const $childScope = _peek_scope_id();
		field_default({
			name: error.message,
			heading
		});
		_scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			a: _write_if($scope3_reason, 0) && _existing_scope($childScope)
		});
		$wg__error_message || _resume_branch($scope3_id);
	}, "a1", "a2");
	_scope($scope0_id, {
		f: heading,
		g: $wi__input_promise && $input_promise__closures
	});
}, 1);
