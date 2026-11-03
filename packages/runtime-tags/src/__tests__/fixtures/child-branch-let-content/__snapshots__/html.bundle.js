// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let c = input.content;
			_html(`<button>clear</button>${_el_resume($scope1_id, "a")}`);
			_dynamic_tag($scope1_id, "b", c, {});
			_script($scope1_id, "b0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.content });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($wg__input_show << 1 | $wg__input_show << 3);
	const $childScope = _peek_scope_id();
	card_default({
		show: input.show,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>static ${_text_resume($scope1_id, "a", input.label, $wg__input_label * 2)}</em>`);
			$wi__input_show__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_label);
			$wg__input_label || $wi__input_show__OR__input_label && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	$wi__input_show__OR__input_label && _scope($scope0_id, {
		e: $wi__input_show && input.label,
		f: $wi__input_label && $input_label__closures,
		a: $wi__input_show && _existing_scope($childScope)
	});
}, 1);
