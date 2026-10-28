// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	const Row = { content: _content("a0", (r) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__r_v = _write_guard($scope1_reason, 0), $wi__r_v = _write_if($scope1_reason, 0);
		_html(`<em>${_text_resume($scope1_id, "a", input.label, $wg__input_label)}:${_text_resume($scope1_id, "b", r.v, $wg__r_v * 2)}</em>`);
		($wi__input_label || $wi__r_v) && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }), "a1", $wg__input_label || $wg__r_v);
		$wg__input_label || $wg__r_v || ($wi__input_label || $wi__r_v) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_await($scope0_id, "b", Promise.resolve(n), (x) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		Row.content({ v: x });
		_scope($scope2_id, { a: _existing_scope($childScope) });
	});
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: n,
		g: $wi__input_label && $input_label__closures
	});
}, 1);
