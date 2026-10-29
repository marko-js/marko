// tags/outer.marko
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_more__OR__input_label = _write_if($scope0_reason, 0), $wg__input_more = _write_guard($scope0_reason, 1), $wi__input_more = _write_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let tag = input.tag;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", tag, {}, _content_resume("b0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(_text_resume($scope2_id, "a", input.label, $wg__input_label));
				$wi__input_more__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b1", $wg__input_label);
				$wg__input_label || $wi__input_more__OR__input_label && _resume_branch($scope2_id);
			}, $scope1_id, ($scope) => [{ f: input.label }, { _: $scope($scope0_id) }]), 0, 0);
			$wi__input_more__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_more, $wg__input_more);
	$wi__input_more__OR__input_label && _scope($scope0_id, {
		f: $wi__input_more && input.label,
		g: $wi__input_more && tag,
		h: $wi__input_label && $input_label__closures
	});
	$wg__input_more || $wi__input_more__OR__input_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 3) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	outer_default({
		tag: input.alt ? "b" : "em",
		label: input.label,
		more: input.more
	});
	_write_if($scope0_reason, 1) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
