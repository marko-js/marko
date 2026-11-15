// tags/c1.marko
var c1_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_item__closures = /* @__PURE__ */ new Set();
	const D = { content: _content("b0", ({ depth }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (input.item) {
				const $scope3_id = _scope_id();
				_html("a");
				$wi__input_item && _scope($scope3_id, {});
				return 0;
			}
		}, $scope1_id, "a", $wg__input_item, $wg__input_item);
		_if(() => {
			if (depth > 0) {
				_scope_id();
				_set_scope_reason(0);
				D.content({ depth: depth - 1 });
				return 0;
			}
		}, $scope1_id, "b", 0, 0);
		$wi__input_item && _subscribe($wi__input_item && $input_item__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b1", $wg__input_item);
	}, $scope0_id) };
	D.content({ depth: 1 });
	$wi__input_item && _scope($scope0_id, { e: $wi__input_item && $input_item__closures });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	c1_default({ item: attrTag({ content: _content("a0", (p) => {
		_scope_reason();
		_scope_id();
		_html("a");
	}, $scope0_id) }) });
}, 1);
