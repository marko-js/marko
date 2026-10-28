// template.marko
_shells({ a: "a !;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let x = input.v;
	_dynamic_tag($scope0_id, "a", x === "a" ? "b" : "i", {}, 0, _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_resume($scope1_id, "a", input.w, $wg__input_w));
		_subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_w);
		$wg__input_w || _resume_branch($scope1_id);
	}, $scope0_id));
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", x, 1);
	_scope($scope0_id, {
		e: input.w,
		g: $wi__input_w && $input_w__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va2", input.w, !_server_guard($scope0_reason, 1)), _content_withhold(input.v));
}, 1);
