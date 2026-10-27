// tags/bold.marko
var bold_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<b>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</b>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/italic.marko
var italic_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<i>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</i>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_bold__OR__input_label = _write_guard($scope0_reason, 2), $wi__input_tag__OR__input_bold__OR__input_label = _write_if($scope0_reason, 3), $wg__input_tag = _write_guard($scope0_reason, 4), $wi__input_bold = _write_if($scope0_reason, 5), $wi__input_label = _write_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_bold__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.tag, {}, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "a", input.bold ? bold_default : italic_default, { label: input.label }, 0, 0, $wg__input_bold__OR__input_label);
		$wi__input_tag__OR__input_bold__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _subscribe($wi__input_bold && $input_bold__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_bold__OR__input_label), "a2", $wg__input_bold__OR__input_label);
		$wg__input_bold__OR__input_label || $wi__input_tag__OR__input_bold__OR__input_label && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{
		f: input.label,
		e: input.bold
	}]), 0, $wg__input_tag);
	$wi__input_tag__OR__input_bold__OR__input_label && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.bold,
		f: _write_if($scope0_reason, 0) && input.label,
		g: $wi__input_bold && $input_bold__closures,
		h: $wi__input_label && $input_label__closures
	});
}, 1);
