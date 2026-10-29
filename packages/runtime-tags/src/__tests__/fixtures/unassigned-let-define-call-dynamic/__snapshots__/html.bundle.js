// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1), $wi__input_w__OR__input_show = _write_if($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 2), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", input.w, $wg__input_w)}</p>`);
		$wi__input_w__OR__input_show && _subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_w);
		$wg__input_w || $wi__input_w__OR__input_show && _resume_branch($scope1_id);
	}, $scope0_id) };
	let view = input.show ? Body : null;
	_dynamic_tag($scope0_id, "a", view, {}, 0, 0, 0);
	$wi__input_w__OR__input_show && _scope($scope0_id, {
		d: $wi__input_show && input.w,
		f: $wi__input_show && Body,
		i: $wi__input_w && $input_w__closures
	});
	$wi__input_w__OR__input_show && _resume_branch($scope0_id);
}, 1);
