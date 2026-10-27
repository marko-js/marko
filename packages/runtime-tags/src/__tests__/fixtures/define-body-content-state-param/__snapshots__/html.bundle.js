// tags/one.marko
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_t = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Wrap = { content: _content("b0", ({ content, t }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__content__OR__t = _write_guard($scope1_reason, 0);
		_dynamic_tag($scope1_id, "a", content, { title: t }, 0, 0, $wg__content__OR__t);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {
			d: _write_if($scope1_reason, 2) && content,
			e: _write_if($scope1_reason, 1) && t
		});
	}, $scope0_id) };
	_set_scope_reason($wg__input_content__OR__input_t << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	Wrap.content({
		content: input.content,
		t: input.t
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 0), $wi__input_y = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	let s = "a";
	_html(`<button class=s>s</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	one_default({
		t: s,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_resume($scope1_id, "a", input.y, $wg__input_y * 2)}`);
			_subscribe($wi__input_y && $input_y__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_y);
			$wg__input_y || _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: input.y,
		f: s,
		g: $wi__input_y && $input_y__closures,
		b: _existing_scope($childScope)
	});
}, 1);
