// tags/wrap.marko
var wrap_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.content });
});

// tags/tree-b.marko
var tree_b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wg__input_show__OR__input_depth = _write_guard($scope0_reason, 0), $wi__input_show__OR__input_depth = _write_if($scope0_reason, 0), $wi__input_depth = _write_if($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_depth__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($wg__input_show << 1 | $wg__input_show << 3);
	const $childScope = _peek_scope_id();
	wrap_default({
		show: input.show,
		content: _content_resume("c1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<span>${_text_mark($scope1_id, "a", input.depth, $wg__input_depth)}</span>`);
			$wi__input_show__OR__input_depth && _subscribe($wi__input_depth && $input_depth__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "c0", $wg__input_depth);
		}, $scope0_id)
	});
	_if(() => {
		if (input.depth) {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", tree_a_default, {
				show: input.show,
				depth: input.depth - 1
			}, 0, 0, $wg__input_show__OR__input_depth);
			$wi__input_show__OR__input_depth && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", $wg__input_show__OR__input_depth, $wg__input_depth);
	$wi__input_show__OR__input_depth && _scope($scope0_id, {
		e: $wi__input_depth && input.show,
		f: $wi__input_show && input.depth,
		h: $wi__input_depth && $input_depth__closures,
		a: $wi__input_show && _existing_scope($childScope)
	});
});

// tags/tree-a.marko
var tree_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	tree_b_default({
		show: input.show,
		depth: input.depth
	});
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		h: count,
		c: _write_if($scope0_reason, 0) && _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_show << 1 | $wg__input_show << 3);
	const $childScope = _peek_scope_id();
	tree_a_default({
		show: input.show,
		depth: 1
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
