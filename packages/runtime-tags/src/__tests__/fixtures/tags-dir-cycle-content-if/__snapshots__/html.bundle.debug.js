// tags/cyc-b/index.marko
var cyc_b_default = _template("__tests__/tags/cyc-b/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 1), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<span>b ${_text_mark($scope0_id, "#text/0", input.depth, $wg__input_depth * 2)}</span>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, $wg__input_content);
	_dynamic_tag($scope0_id, "#text/2", cyc_a_default, { depth: input.depth + 1 }, 0, 0, $wg__input_depth);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/cyc-b/index.marko", 0);
});

// tags/cyc-a/index.marko
var cyc_a_default = _template("__tests__/tags/cyc-a/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0), $wi__input_depth = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_depth__closures = new Set();
	_html(`<div>a ${_text_mark($scope0_id, "#text/0", input.depth, $wg__input_depth * 2)}</div>`);
	_if(() => {
		if (input.depth < 2) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1 | $wg__input_depth << 3);
			const $childScope = _peek_scope_id();
			cyc_b_default({
				depth: input.depth + 1,
				content: _content("__tests__/tags/cyc-a/index.marko_2*content", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.depth % 2) {
							const $scope3_id = _scope_id();
							_html("odd");
							$wi__input_depth && _scope($scope3_id, {}, "__tests__/tags/cyc-a/index.marko", "4:6");
							return 0;
						}
					}, $scope2_id, "#text/0", $wg__input_depth, $wg__input_depth);
					$wi__input_depth && _subscribe($input_depth__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/cyc-a/index.marko", "3:4"), "__tests__/tags/cyc-a/index.marko_2_input_depth#0:4/subscribe", $wg__input_depth);
				}, $scope1_id)
			});
			$wi__input_depth && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/cyc-a/index.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_depth, $wg__input_depth);
	$wi__input_depth && _scope($scope0_id, { "ClosureScopes:input_depth/5": $input_depth__closures }, "__tests__/tags/cyc-a/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	cyc_a_default({ depth: 1 });
}, 1);
