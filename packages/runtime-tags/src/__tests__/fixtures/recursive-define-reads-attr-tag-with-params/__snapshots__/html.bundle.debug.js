// tags/c1.marko
var c1_default = _template("__tests__/tags/c1.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_item__closures = new Set();
	const D = { content: _content("__tests__/tags/c1.marko_1*content", ({ depth }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__depth = _write_guard($scope1_reason, 0), $wi__depth = _write_if($scope1_reason, 0);
		_if(() => {
			if (input.item) {
				const $scope3_id = _scope_id();
				_html("a");
				$wi__input_item && _scope($scope3_id, {}, "__tests__/tags/c1.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__input_item, $wg__input_item);
		_if(() => {
			if (depth > 0) {
				const $scope2_id = _scope_id();
				_set_scope_reason($wg__depth << 1);
				const $childScope = _peek_scope_id();
				D.content({ depth: depth - 1 });
				$wi__depth && _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/tags/c1.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/1", $wg__depth, $wg__depth);
		($wi__input_item || $wi__depth) && _subscribe($wi__input_item && $input_item__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/c1.marko", "1:2"), "__tests__/tags/c1.marko_1_input_item#0:3/subscribe", $wg__input_item || $wg__depth);
	}, $scope0_id) };
	D.content({ depth: 1 });
	$wi__input_item && _scope($scope0_id, { "ClosureScopes:input_item/4": $wi__input_item && $input_item__closures }, "__tests__/tags/c1.marko", 0, { input_item: ["input.item"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	c1_default({ item: attrTag({ content: _content("__tests__/template.marko_1*content", (p) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("a");
	}, $scope0_id) }) });
}, 1);
