// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 2), $wg__input_b = _write_guard($scope0_reason, 3), $wg__input_open = _write_guard($scope0_reason, 1), $wi__input_open = _write_if($scope0_reason, 1), $wi__input_a = _write_if($scope0_reason, 2), $wi__input_b = _write_if($scope0_reason, 3), $wi__input_open__OR__input_a__OR__input_b = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const Box = { content: _content("a0", ({ open, content }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__open = _write_guard($scope2_reason, 1);
		_if(() => {
			if (open) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "a", content, {}, 0, 0, 0);
				_write_if($scope2_reason, 0) && _scope($scope3_id, {});
				return 0;
			}
		}, $scope2_id, "a", _write_guard($scope2_reason, 0), $wg__open);
		_write_if($scope2_reason, 1) && _scope($scope2_id, { e: content });
	}, $scope0_id) };
	_set_scope_reason($wg__input_open << 1 | $wg__input_open << 3);
	const $childScope = _peek_scope_id();
	Box.content({
		open: input.open,
		content: _content_resume("a3", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_text_mark($scope1_id, "a", input.a, $wg__input_a * 2)} ${_text_mark($scope1_id, "b", input.b, $wg__input_b * 2)}`);
			$wi__input_open__OR__input_a__OR__input_b && _subscribe($wi__input_b && $input_b__closures, _subscribe($wi__input_a && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_a || $wg__input_b), "a2", $wg__input_a || $wg__input_b);
		}, $scope0_id)
	});
	$wi__input_open__OR__input_a__OR__input_b && _scope($scope0_id, {
		e: $wi__input_open && input.a,
		f: $wi__input_open && input.b,
		g: $wi__input_a && $input_a__closures,
		h: $wi__input_b && $input_b__closures,
		a: $wi__input_open && _existing_scope($childScope)
	});
}, 1);
