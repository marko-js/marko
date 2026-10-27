// tags/child-tag/index.marko
var child_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_footer = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.footer, {}, 0, 0, $wg__input_footer);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_submitLabel = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_submitLabel__OR__input_label = _write_if($scope0_reason, 0), $wi__input_submitLabel = _write_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_submitLabel__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	child_tag_default({ footer: attrTag({ content: _content("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<button>${_text_resume($scope1_id, "a", input.submitLabel || "OK", $wg__input_submitLabel)}</button><span>${_text_resume($scope1_id, "b", input.label, $wg__input_label)}</span>`);
		const $scope1_guard = $wg__input_submitLabel || $wg__input_label;
		if (_write_if($scope0_reason, 0)) {
			const $scope1_write = _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			_subscribe($wi__input_submitLabel && $input_submitLabel__closures, $scope1_write, "a0", $scope1_guard);
			_subscribe($wi__input_label && $input_label__closures, $scope1_write, "a1", $scope1_guard);
		}
		$scope1_guard || $wi__input_submitLabel__OR__input_label && _resume_branch($scope1_id);
	}, $scope0_id) }) });
	$wi__input_submitLabel__OR__input_label && _scope($scope0_id, {
		f: $wi__input_submitLabel && $input_submitLabel__closures,
		g: $wi__input_label && $input_label__closures
	});
}, 1);
