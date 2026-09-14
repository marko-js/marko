// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/1", input.q, _serialize_guard($scope0_reason, 0))} ${_text_resume($scope0_id, "#text/2", input.on, _serialize_guard($scope0_reason, 1) * 2)}</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// tags/parent.marko
var parent_default = _template("__tests__/tags/parent.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_on__OR__input_onChange__OR__input_data_q = _serialize_if($scope0_reason, 1), $sg__input_on__OR__input_onChange__OR__input_data_q = _serialize_guard($scope0_reason, 1), $si__input_data_q = _serialize_if($scope0_reason, 4), $si__input_on__OR__input_onChange = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_data_q__closures = new Set();
	const $on__closures = new Set();
	let on = input.on;
	_try($scope0_id, "#text/0", _content_resume("__tests__/tags/parent.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(0, 4), () => {
			const $scope2_id = _scope_id();
			$si__input_data_q && $si__input_on__OR__input_onChange__OR__input_data_q && _script($scope2_id, "__tests__/tags/parent.marko_2_input_data_q#7/pending", $sg__input_on__OR__input_onChange__OR__input_data_q);
			$si__input_on__OR__input_onChange && $si__input_on__OR__input_onChange__OR__input_data_q && _script($scope2_id, "__tests__/tags/parent.marko_2_on#8/pending", $sg__input_on__OR__input_onChange__OR__input_data_q);
			_set_serialize_reason(_serialize_guard($scope0_reason, 4) << 1 | _serialize_guard($scope0_reason, 0) << 3);
			const $childScope = _peek_scope_id();
			child_default({
				q: input.data.q,
				on
			});
			$si__input_on__OR__input_onChange__OR__input_data_q && _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/parent.marko", "7:3");
			$sg__input_on__OR__input_onChange__OR__input_data_q || $si__input_on__OR__input_onChange__OR__input_data_q && _resume_branch($scope2_id);
		}, $sg__input_on__OR__input_onChange__OR__input_data_q);
		$si__input_on__OR__input_onChange__OR__input_data_q && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/parent.marko", "5:1");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/tags/parent.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading...");
	}, $scope0_id) }) });
	$si__input_on__OR__input_onChange__OR__input_data_q && _scope($scope0_id, {
		input_on: _serialize_if($scope0_reason, 3) && input.on,
		input_onChange: _serialize_if($scope0_reason, 2) && input.onChange,
		"ClosureScopes:input_data_q": $si__input_data_q && $input_data_q__closures,
		"ClosureScopes:on": $si__input_on__OR__input_onChange && $on__closures
	}, "__tests__/tags/parent.marko", 0, {
		input_on: ["input.on"],
		input_onChange: ["input.onChange"]
	});
	$si__input_on__OR__input_onChange__OR__input_data_q && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(42 | _serialize_guard($scope0_reason, 0) << 9);
	const $childScope = _peek_scope_id();
	parent_default({
		data: input.data,
		on,
		onChange: _resume((_new_on) => {
			on = _new_on;
		}, "__tests__/template.marko_0/onChange", $scope0_id)
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		on,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { on: "1:5" });
}, 1);
