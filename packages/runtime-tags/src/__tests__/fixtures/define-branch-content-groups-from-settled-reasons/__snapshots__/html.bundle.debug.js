// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 2), $wg__input_b = _write_guard($scope0_reason, 3), $wg__input_open = _write_guard($scope0_reason, 1), $wi__input_open = _write_if($scope0_reason, 1), $wi__input_a = _write_if($scope0_reason, 2), $wi__input_b = _write_if($scope0_reason, 3), $wi__input_open__OR__input_a__OR__input_b = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	const Box = { content: _content("__tests__/template.marko_2*content", ({ open, content }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__open = _write_guard($scope2_reason, 1);
		_if(() => {
			if (open) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "#text/0", content, {}, 0, 0, 0);
				_write_if($scope2_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "2:4");
				return 0;
			}
		}, $scope2_id, "#text/0", _write_guard($scope2_reason, 0), $wg__open);
		_write_if($scope2_reason, 1) && _scope($scope2_id, { content }, "__tests__/template.marko", "1:2", { content: "1:21" });
	}, $scope0_id) };
	_set_scope_reason($wg__input_open << 1 | $wg__input_open << 3);
	const $childScope = _peek_scope_id();
	Box.content({
		open: input.open,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_text_mark($scope1_id, "#text/0", input.a, $wg__input_a * 2)} ${_text_mark($scope1_id, "#text/1", input.b, $wg__input_b * 2)}`);
			$wi__input_open__OR__input_a__OR__input_b && _subscribe($wi__input_b && $input_b__closures, _subscribe($wi__input_a && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2"), "__tests__/template.marko_1_input_a#0:4/subscribe", $wg__input_a || $wg__input_b), "__tests__/template.marko_1_input_b#0:5/subscribe", $wg__input_a || $wg__input_b);
		}, $scope0_id)
	});
	$wi__input_open__OR__input_a__OR__input_b && _scope($scope0_id, {
		input_a: $wi__input_open && input.a,
		input_b: $wi__input_open && input.b,
		"ClosureScopes:input_a/6": $wi__input_a && $input_a__closures,
		"ClosureScopes:input_b/7": $wi__input_b && $input_b__closures,
		"#childScope/0": $wi__input_open && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	});
}, 1);
