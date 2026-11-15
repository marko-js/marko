// tags/tree.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_depth = _write_guard($scope0_reason, 1), $wi__input_depth__OR__input_content = _write_if($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 2), $wi__input_depth = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1 | $wg__input_depth << 3);
			const $childScope = _peek_scope_id();
			$content({
				depth: input.depth - 1,
				content: _content_resume("b1", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_dynamic_tag($scope2_id, "a", input.content, {}, 0, 0, $wg__input_content);
					$wi__input_depth__OR__input_content && _subscribe($wi__input_content && $input_content__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b0", $wg__input_content);
				}, $scope1_id)
			});
			$wi__input_depth__OR__input_content && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: $wi__input_depth && _existing_scope($childScope)
			});
			return 0;
		} else {
			const $scope3_id = _scope_id();
			_dynamic_tag($scope3_id, "a", input.content, {}, 0, 0, $wg__input_content);
			$wi__input_depth__OR__input_content && _scope($scope3_id, { _: $wi__input_content && _scope_with_id($scope0_id) });
			return 1;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0) || $wg__input_depth, $wg__input_depth);
	$wi__input_depth__OR__input_content && _scope($scope0_id, {
		e: $wi__input_depth && input.content,
		g: $wi__input_content && $input_content__closures
	});
};
var tree_default = _template("b", $content);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html("<div>x");
	tree_default({
		depth: 2,
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
