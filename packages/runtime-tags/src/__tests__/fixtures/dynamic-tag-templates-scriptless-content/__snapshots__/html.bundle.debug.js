// tags/bold.marko
var bold_default = _template("__tests__/tags/bold.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<b>${_text_resume($scope0_id, "#text/0", input.label, $wg__input_label)}</b>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/bold.marko", 0);
});

// tags/italic.marko
var italic_default = _template("__tests__/tags/italic.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<i>${_text_resume($scope0_id, "#text/0", input.label, $wg__input_label)}</i>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/italic.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_bold__OR__input_label = _write_guard($scope0_reason, 2), $wi__input_tag__OR__input_bold__OR__input_label = _write_if($scope0_reason, 3), $wg__input_tag = _write_guard($scope0_reason, 4), $wi__input_bold = _write_if($scope0_reason, 5), $wi__input_label = _write_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_bold__closures = new Set();
	const $input_label__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.tag, {}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_dynamic_tag($scope1_id, "#text/0", input.bold ? bold_default : italic_default, { label: input.label }, 0, 0, $wg__input_bold__OR__input_label);
		$wi__input_tag__OR__input_bold__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _subscribe($wi__input_bold && $input_bold__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_1_input_bold#0:4/subscribe", $wg__input_bold__OR__input_label), "__tests__/template.marko_1_input_label#0:5/subscribe", $wg__input_bold__OR__input_label);
		$wg__input_bold__OR__input_label || $wi__input_tag__OR__input_bold__OR__input_label && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{
		input_label: input.label,
		input_bold: input.bold
	}]), 0, $wg__input_tag);
	$wi__input_tag__OR__input_bold__OR__input_label && _scope($scope0_id, {
		input_bold: _write_if($scope0_reason, 1) && input.bold,
		input_label: _write_if($scope0_reason, 0) && input.label,
		"ClosureScopes:input_bold/6": $wi__input_bold && $input_bold__closures,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_bold: ["input.bold"],
		input_label: ["input.label"]
	});
}, 1);
