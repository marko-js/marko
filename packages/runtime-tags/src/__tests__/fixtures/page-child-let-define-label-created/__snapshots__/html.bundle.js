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
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 3), $wi__input_label__OR__input_show__OR__input_more = _write_if($scope0_reason, 2), $wg__input_more = _write_guard($scope0_reason, 5), $wi__input_more = _write_if($scope0_reason, 5), $wg__input_show = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_more = _write_if($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 4), $wi__input_label = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.label, $wg__input_label)}</em>`);
		$wi__input_label__OR__input_show__OR__input_more && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_label);
		$wg__input_label || $wi__input_label__OR__input_show__OR__input_more && _resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason($wg__input_more << 1);
			const $childScope = _peek_scope_id();
			outer_default({
				data: { content: Body.content },
				more: input.more
			});
			$wi__input_show__OR__input_more && _scope($scope2_id, {
				_: $wi__input_more && _scope_with_id($scope0_id),
				a: $wi__input_more && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 1), $wg__input_show);
	$wi__input_label__OR__input_show__OR__input_more && _scope($scope0_id, {
		d: $wi__input_show__OR__input_more && input.label,
		f: $wi__input_show && input.more,
		h: $wi__input_show && Body?.content,
		i: $wi__input_label && $input_label__closures
	});
}, 1);
