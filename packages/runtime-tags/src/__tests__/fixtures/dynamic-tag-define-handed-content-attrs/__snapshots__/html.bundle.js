// tags/one.marko
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $wi__input_content = _write_if($scope0_reason, 1), $wg__input_t = _write_guard($scope0_reason, 2), $wi__input_t = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const Wrap = { content: _content("b0", ({ t }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__t = _write_guard($scope1_reason, 0), $wi__t = _write_if($scope1_reason, 0);
		_dynamic_tag($scope1_id, "a", input.content, { title: t }, 0, 0, $wg__input_content || $wg__t);
		($wi__input_content || $wi__t) && _subscribe($wi__input_content && $input_content__closures, _scope($scope1_id, {
			d: $wi__input_content && t,
			_: _scope_with_id($scope0_id)
		}), "b1", $wg__input_content || $wg__t);
		$wg__input_content || $wg__t || ($wi__input_content || $wi__t) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason($wg__input_t << 1);
	const $childScope = _peek_scope_id();
	Wrap.content({ t: input.t });
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: $wi__input_t && input.content,
		f: $wi__input_content && $input_content__closures,
		a: $wi__input_t && _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let z = 0;
	_html(`<button class=z>z</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason($wg__input_y << 1 | $wg__input_y << 5);
	const $childScope = _peek_scope_id();
	one_default({
		t: input.y,
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("A");
		}, $scope0_id)
	});
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: z,
		b: _write_if($scope0_reason, 0) && _existing_scope($childScope)
	});
}, 1);
