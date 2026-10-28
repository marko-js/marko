// tags/bold.marko
_shells({ b: "b;D ;<b> </b>" });
var bold_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<b>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</b>`);
	_scope($scope0_id, {});
});

// tags/italic.marko
_shells({ c: "c;D ;<i> </i>" });
var italic_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<i>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</i>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0;b%;<!><!><!>",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_bold__OR__input_label = _write_guard($scope0_reason, 2), $wi__input_tag__OR__input_bold__OR__input_label = _write_if($scope0_reason, 3), $wg__input_tag = _write_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_bold__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.tag, {}, 10, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "a", input.bold ? bold_default : italic_default, { label: input.label }, 1, 0, 0, $wg__input_bold__OR__input_label, $scope0_reason, 2);
		(_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 2)) && _patch_init($scope1_id, "a1");
		(_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 2)) && _patch_init($scope1_id, "a2");
		_patch_join_init($scope1_id, "a3", $scope0_reason, 2, _filled_guard($scope0_reason, 5) && ">e", _filled_guard($scope0_reason, 6) && ">f");
		$wi__input_tag__OR__input_bold__OR__input_label && _subscribe(_unfilled_if($scope0_reason, 6) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_bold__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
		$wg__input_bold__OR__input_label || $wi__input_tag__OR__input_bold__OR__input_label && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{
		f: input.label,
		e: input.bold
	}]), 0, $wg__input_tag, $scope0_reason, 4);
	_filled_guard($scope0_reason, 5) && _content_withheld("a0", $scope0_id) ? _patch_fill($scope0_id, "va4", input.bold) : _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 6) && _patch_write($scope0_id, "xe", input.bold);
	_filled_guard($scope0_reason, 6) && _content_withheld("a0", $scope0_id) ? _patch_fill($scope0_id, "va5", input.label) : _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 5) && _patch_write($scope0_id, "xf", input.label);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.bold,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label,
		g: _write_if($scope0_reason, 5) && $input_bold__closures,
		h: _write_if($scope0_reason, 6) && $input_label__closures
	});
}, 1);
