// tags/c2.marko
var c2_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_content = _write_if($scope0_reason, 0), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const D = { content: _content("b0", ({ depth }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "a", input.content, [depth], 0, 1, $wg__input_content);
		_if(() => {
			if (depth > 0) {
				_scope_id();
				_set_scope_reason(0);
				D.content({ depth: depth - 1 });
				return 0;
			}
		}, $scope1_id, "b", 0, 0);
		$wi__input_content && _subscribe($wi__input_content && $input_content__closures, _scope($scope1_id, {
			e: $wi__input_content && depth,
			_: _scope_with_id($scope0_id)
		}), "b1", $wg__input_content);
	}, $scope0_id) };
	D.content({ depth: 1 });
	$wi__input_content && _scope($scope0_id, { e: $wi__input_content && $input_content__closures });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	c2_default({ content: _content("a0", (p) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(_text_mark($scope1_id, "a", p, _write_guard($scope1_reason, 0) * 2));
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) });
}, 1);
