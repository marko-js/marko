// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 2), $wi__input_tag__OR__input_note = _write_if($scope0_reason, 0), $wg__input_tag = _write_guard($scope0_reason, 1), $wi__input_note = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.tag, {}, _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_resume($scope1_id, "a", input.note, $wg__input_note));
		$wi__input_tag__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b1", $wg__input_note);
		$wg__input_note || $wi__input_tag__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ e: input.note }]), 0, $wg__input_tag);
	$wi__input_tag__OR__input_note && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.note,
		f: $wi__input_note && $input_note__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let tag = "b";
	_html(`<button>swap</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(10 | _write_guard($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	child_default({
		tag,
		note: input.note
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: tag,
		b: _existing_scope($childScope)
	});
}, 1);
