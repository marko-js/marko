// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	const F = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<span>${_text_resume($scope1_id, "a", input.x, $wg__input_x)}</span>`);
		$wi__input_x && _subscribe($input_x__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_x);
		$wg__input_x || $wi__input_x && _resume_branch($scope1_id);
	}, $scope0_id) };
	const E = { content: _content("a2", () => {
		_scope_id();
		_scope_reason();
		F.content({});
	}, $scope0_id) };
	({ content: _content("a3", () => {
		_scope_id();
		_scope_reason();
		E.content({});
	}, $scope0_id) }).content({});
	$wi__input_x && _scope($scope0_id, { e: $input_x__closures });
}, 1);
