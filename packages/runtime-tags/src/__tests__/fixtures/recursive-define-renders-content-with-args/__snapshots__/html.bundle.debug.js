// tags/c2.marko
var c2_default = _template("__tests__/tags/c2.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	const D = { content: _content("__tests__/tags/c2.marko_1*content", ({ depth }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__depth = _write_guard($scope1_reason, 0), $wi__depth = _write_if($scope1_reason, 0);
		_dynamic_tag($scope1_id, "#text/0", input.content, [depth], 0, 1, $wg__input_content || $wg__depth);
		_if(() => {
			if (depth > 0) {
				const $scope2_id = _scope_id();
				_set_scope_reason($wg__depth << 1);
				const $childScope = _peek_scope_id();
				D.content({ depth: depth - 1 });
				$wi__depth && _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/tags/c2.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/1", $wg__depth, $wg__depth);
		($wi__input_content || $wi__depth) && _subscribe($wi__input_content && $input_content__closures, _scope($scope1_id, {
			depth: $wi__input_content && depth,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/c2.marko", "1:2", { depth: "1:13" }), "__tests__/tags/c2.marko_1_input_content#0:3/subscribe", $wg__input_content || $wg__depth || $wg__depth);
	}, $scope0_id) };
	D.content({ depth: 1 });
	$wi__input_content && _scope($scope0_id, { "ClosureScopes:input_content/4": $wi__input_content && $input_content__closures }, "__tests__/tags/c2.marko", 0, { input_content: ["input.content"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	c2_default({ content: _content("__tests__/template.marko_1*content", (p) => {
		const $scope1_reason = _scope_reason(), $wg__p = _write_guard($scope1_reason, 0);
		const $scope1_id = _scope_id();
		_html(_text_mark($scope1_id, "#text/0", p, $wg__p * 2));
		_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) });
}, 1);
