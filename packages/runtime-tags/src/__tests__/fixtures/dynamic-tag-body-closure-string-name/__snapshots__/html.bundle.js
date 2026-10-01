// tags/heading.marko
var heading_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_text = _write_guard($scope0_reason, 2), $wi__input_as__OR__input_text = _write_if($scope0_reason, 0), $wg__input_as = _write_guard($scope0_reason, 1), $wi__input_text = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_text__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.as || "div", {}, _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_resume($scope1_id, "a", input.text, $wg__input_text));
		$wi__input_as__OR__input_text && _subscribe($wi__input_text && $input_text__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b1", $wg__input_text);
		$wg__input_text || $wi__input_as__OR__input_text && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ e: input.text }]), 0, $wg__input_as);
	$wi__input_as__OR__input_text && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.text,
		f: $wi__input_text && $input_text__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	heading_default({
		as: "h2",
		text: "Hello"
	});
}, 1);
