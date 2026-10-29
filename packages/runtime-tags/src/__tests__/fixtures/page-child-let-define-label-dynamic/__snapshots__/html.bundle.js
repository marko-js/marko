// tags/wrap.marko
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/outer.marko
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 0), $wi__input_more = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let value = input.data;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "a", value.content, {}, 0, 0, 0);
			_html("</section>");
			$wi__input_more && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_more, $wg__input_more, 0, 0, 1);
	$wi__input_more && _scope($scope0_id, { g: value?.content });
	$wg__input_more || $wi__input_more && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label__OR__input_more__OR__input_wrap = _write_if($scope0_reason, 1), $wg__input_more = _write_guard($scope0_reason, 3), $wg__input_wrap = _write_guard($scope0_reason, 4), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.label, $wg__input_label)}</em>`);
		$wi__input_label__OR__input_more__OR__input_wrap && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_label);
		$wg__input_label || $wi__input_label__OR__input_more__OR__input_wrap && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason($wg__input_more << 1);
	const $childScope = _peek_scope_id();
	outer_default({
		data: { content: Body.content },
		more: input.more
	});
	_dynamic_tag($scope0_id, "b", input.wrap && wrap_default, { content: Body.content }, 0, 0, $wg__input_wrap);
	$wi__input_label__OR__input_more__OR__input_wrap && _scope($scope0_id, {
		e: _write_if($scope0_reason, 0) && input.label,
		i: _write_if($scope0_reason, 4) && Body?.content,
		k: $wi__input_label && $input_label__closures,
		a: _write_if($scope0_reason, 3) && _existing_scope($childScope)
	});
}, 1);
