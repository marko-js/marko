// tags/outer.marko
var outer_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let T = input.fmt;
	_dynamic_tag($scope0_id, "a", T, {}, 0, 0, 0);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_items__OR__input_label = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_items = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_for_of(input.items, (v) => {
		const $scope1_id = _scope_id();
		const Body = { content: _content("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<p>${_text_resume($scope2_id, "a", v + input.label, $wg__input_label)}</p>`);
			$wi__input_items__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__input_label);
			$wg__input_label || $wi__input_items__OR__input_label && _resume_branch($scope2_id);
		}, $scope1_id) };
		outer_default({ fmt: Body });
		$wi__input_items__OR__input_label && _scope($scope1_id, {
			M: $wi__input_label && v,
			_: _scope_with_id($scope0_id)
		});
	}, (v) => v, $scope0_id, "a", $wg__input_items, $wg__input_items);
	$wi__input_items__OR__input_label && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.label,
		f: $wi__input_label && $input_label__closures
	});
}, 1);
