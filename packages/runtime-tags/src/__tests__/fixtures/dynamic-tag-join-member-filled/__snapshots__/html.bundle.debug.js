// tags/one.marko
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<i>one ${_text_resume($scope0_id, "#text/0", input.id, $wg__input_id * 2)}</i>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/one.marko", 0);
});

// tags/two.marko
var two_default = _template("__tests__/tags/two.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<b>two ${_text_resume($scope0_id, "#text/0", input.id, $wg__input_id * 2)}</b>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/two.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 1), $wi__input_id = _write_if($scope0_reason, 1), $wg__input_which__OR__input_id = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_id__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.which ? one_default : two_default, { id: input.id }, 0, 0, $wg__input_which__OR__input_id);
	_try($scope0_id, "#text/1", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "#text/0", input.id, $wg__input_id)}</p>`);
		$wi__input_id && _subscribe($input_id__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_id/7": 1
		}, "__tests__/template.marko", "4:2"), "__tests__/template.marko_2_input_id#0:5/subscribe", $wg__input_id);
		$wg__input_id || $wi__input_id && _resume_branch($scope2_id);
	}, () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`loading ${_text_resume($scope1_id, "#text/0", input.id, $wg__input_id * 2)}`);
		_subscribe($wi__input_id && $input_id__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"), "__tests__/template.marko_1_input_id#0:5/subscribe", $wg__input_id);
		$wg__input_id || _resume_branch($scope1_id);
	}, void 0, "__tests__/template.marko_1*content");
	_scope($scope0_id, {
		input_which: $wi__input_id && input.which,
		input_id: input.id,
		"ClosureScopes:input_id/7": $wi__input_id && $input_id__closures
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_id: ["input.id"]
	});
}, 1);
