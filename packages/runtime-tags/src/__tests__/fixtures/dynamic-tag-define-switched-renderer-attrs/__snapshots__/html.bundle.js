// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_t = _write_guard($scope0_reason, 2), $wi__input_t = _write_if($scope0_reason, 2), $wg__input_n__OR__input_x = _write_guard($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_t__closures = /* @__PURE__ */ new Set();
	const A = { content: _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("a");
	}, $scope0_id) };
	const B = { content: _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("b");
	}, $scope0_id) };
	const Wrap = { content: _content("a2", ({ n, content }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__content = _write_guard($scope1_reason, 2), $wg__n = _write_guard($scope1_reason, 1), $wi__n__OR__content = _write_if($scope1_reason, 0);
		_html(`<span>${_text_resume($scope1_id, "a", n, $wg__n)}</span>`);
		_dynamic_tag($scope1_id, "b", content, { title: input.t }, 0, 0, $wg__input_t || $wg__content);
		($wi__input_t || $wi__n__OR__content) && _subscribe($wi__input_t && $input_t__closures, _scope($scope1_id, {
			f: $wi__input_t && content,
			_: ($wi__input_t || _write_if($scope1_reason, 2)) && _scope_with_id($scope0_id)
		}), "a3", $wg__input_t || $wg__content || $wg__n);
		$wg__input_t || $wg__content || $wg__n || ($wi__input_t || $wi__n__OR__content) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason($wg__input_n__OR__input_x << 1 | _write_guard($scope0_reason, 3) << 3 | _write_guard($scope0_reason, 4) << 5);
	const $childScope = _peek_scope_id();
	Wrap.content({
		n: input.n,
		content: input.x === 1 ? A : B
	});
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		d: $wi__input_x && input.t,
		g: $wi__input_x && A,
		h: $wi__input_x && B,
		j: $wi__input_t && $input_t__closures,
		a: _write_if($scope0_reason, 0) && _existing_scope($childScope)
	});
}, 1);
