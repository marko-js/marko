// tags/tree.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input = _write_guard($scope0_reason, 1), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_depth = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input << 1 | $wg__input << 3 | $wg__input << 5 | $wg__input << 7);
			const $childScope = _peek_scope_id();
			$content({
				...input,
				depth: input.depth - 1
			});
			_write_if($scope0_reason, 1) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", $wg__input, $wg__input_depth);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
};
var tree_default = _template("b", $content);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html("<div>");
	tree_default({
		depth: 1,
		content: _content("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_text_mark($scope1_id, "a", n, 2)}!`);
			_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
		}, $scope0_id)
	});
	_html(`</div><button>inc</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: n,
		d: $n__closures
	});
}, 1);
