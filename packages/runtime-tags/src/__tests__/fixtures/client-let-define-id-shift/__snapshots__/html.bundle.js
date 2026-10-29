// tags/outer.marko
var outer_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let T = input.fmt;
	_dynamic_tag($scope0_id, "a", T, {}, 0, 0, 0);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.more) {
			const $scope2_id = _scope_id();
			_html("<i>prefix</i>");
			_write_if($scope0_reason, 1) && _scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_more, $wg__input_more, 0, 0, 1);
	const Body = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", input.label, $wg__input_label)}</p>`);
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_label);
		$wg__input_label || $wi__input_label && _resume_branch($scope1_id);
	}, $scope0_id) };
	outer_default({ fmt: Body });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { h: $wi__input_label && $input_label__closures });
}, 1);
