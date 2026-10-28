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
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const heading = _id();
	_html(`<h1${_attr("id", heading)}>Fields</h1>`);
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_promise__closures = /* @__PURE__ */ new Set();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", row.promise, (v) => {
				const $scope4_id = _scope_id();
				_html(`<p>${_text_resume($scope4_id, "a", v, $wg__input_rows)}</p>`);
				$wi__input_rows && _scope($scope4_id, {});
			}, $wg__input_rows);
			$wi__input_rows && _subscribe($for_content__row_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }), "a0", 0);
			$wi__input_rows && _resume_branch($scope3_id);
		}, void 0, (error) => {
			const $scope2_reason = _scope_reason(), $wg__error_message = _write_guard($scope2_reason, 0);
			const $scope2_id = _scope_id();
			_set_scope_reason($wg__error_message << 3 | $wg__error_message << 7);
			const $childScope = _peek_scope_id();
			field_default({
				name: error.message,
				heading
			});
			_scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				a: _write_if($scope2_reason, 0) && _existing_scope($childScope)
			});
			$wg__error_message || _resume_branch($scope2_id);
		}, void 0, "a1");
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			h: $wi__input_rows && $for_content__row_promise__closures
		});
	}, "key", $scope0_id, "b", $wg__input_rows, $wg__input_rows);
	_scope($scope0_id, { f: heading });
}, 1);
