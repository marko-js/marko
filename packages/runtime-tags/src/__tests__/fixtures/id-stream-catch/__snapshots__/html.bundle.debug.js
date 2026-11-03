// tags/field.marko
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_uid__OR__input_heading = _write_guard($scope0_reason, 0), $wg__input_uid = _write_guard($scope0_reason, 2), $wg__input_name = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const uid = input.uid || _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "#text/1", input.name, $wg__input_name)}</label>${_el_resume($scope0_id, "#label/0", $wg__input_uid)}<input${_attr("id", uid)}${_attr("aria-describedby", input.heading)}>${_el_resume($scope0_id, "#input/2", $wg__input_uid__OR__input_heading)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	const heading = _id();
	_html(`<h1${_attr("id", heading)}>Fields</h1>`);
	_try($scope0_id, "#text/1", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		field_default({
			name: "before",
			heading
		});
		_await($scope1_id, "#text/1", input.promise, (items) => {
			const $scope4_id = _scope_id();
			_for_of(items, (item) => {
				const $scope5_id = _scope_id();
				field_default({
					name: item.key,
					heading
				});
				$wi__input_promise && _scope($scope5_id, { _: _scope_with_id($scope4_id) }, "__tests__/template.marko", "5:4");
			}, "key", $scope4_id, "#text/0", $wg__input_promise, $wg__input_promise);
			$wi__input_promise && _scope($scope4_id, {}, "__tests__/template.marko", "4:3");
		}, $wg__input_promise);
		$wi__input_promise && _subscribe($input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_input_promise#0:4/subscribe", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		field_default({
			name: "loading",
			heading
		});
		_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:3");
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
			"#childScope/0": _write_if($scope3_reason, 0) && _existing_scope($childScope)
		}, "__tests__/template.marko", "8:3");
		$wg__error_message || _resume_branch($scope3_id);
	}, "__tests__/template.marko_2*content", "__tests__/template.marko_3*content");
	_scope($scope0_id, {
		heading,
		"ClosureScopes:input_promise/6": $wi__input_promise && $input_promise__closures
	}, "__tests__/template.marko", 0, { heading: "1:5" });
}, 1);
