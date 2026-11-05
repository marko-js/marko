// tags/tree/index.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 1), $wi__input_depth = _write_if($scope0_reason, 1), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_depth__closures = /* @__PURE__ */ new Set();
	_html(`<div>d${_text_mark($scope0_id, "a", input.depth, $wg__input_depth * 2)}`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, $wg__input_content);
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1 | $wg__input_depth << 3);
			const $childScope = _peek_scope_id();
			$content({
				depth: input.depth - 1,
				content: _content("b1", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.depth % 2) {
							const $scope3_id = _scope_id();
							_html("odd");
							$wi__input_depth && _scope($scope3_id, {});
							return 0;
						}
					}, $scope2_id, "a", $wg__input_depth, $wg__input_depth);
					$wi__input_depth && _subscribe($input_depth__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b0", $wg__input_depth);
				}, $scope1_id)
			});
			$wi__input_depth && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", $wg__input_depth, $wg__input_depth, 0, 0, 1);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, { h: $wi__input_depth && $input_depth__closures });
};
var tree_default = _template("b", $content);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	tree_default({ depth: 2 });
}, 1);
