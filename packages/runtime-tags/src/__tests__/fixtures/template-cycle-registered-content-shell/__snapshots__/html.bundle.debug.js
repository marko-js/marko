// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/wrap.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_content: input.content }, "__tests__/tags/wrap.marko", 0, { input_content: ["input.content"] });
});

// tags/tree-b.marko
var tree_b_default = _template("__tests__/tags/tree-b.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wg__input_show__OR__input_depth = _write_guard($scope0_reason, 0), $wi__input_show__OR__input_depth = _write_if($scope0_reason, 0), $wi__input_depth = _write_if($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_depth__closures = new Set();
	_set_scope_reason($wg__input_show << 1 | $wg__input_show << 3);
	const $childScope = _peek_scope_id();
	wrap_default({
		show: input.show,
		content: _content_resume("__tests__/tags/tree-b.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<span>${_text_mark($scope1_id, "#text/0", input.depth, $wg__input_depth)}</span>`);
			$wi__input_show__OR__input_depth && _subscribe($wi__input_depth && $input_depth__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/tree-b.marko", "1:2"), "__tests__/tags/tree-b.marko_1_input_depth#0:5/subscribe", $wg__input_depth);
		}, $scope0_id)
	});
	_if(() => {
		if (input.depth) {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "#text/0", tree_a_default, {
				show: input.show,
				depth: input.depth - 1
			}, 0, 0, $wg__input_show__OR__input_depth);
			$wi__input_show__OR__input_depth && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/tree-b.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_show__OR__input_depth, $wg__input_depth);
	$wi__input_show__OR__input_depth && _scope($scope0_id, {
		input_show: $wi__input_depth && input.show,
		input_depth: $wi__input_show && input.depth,
		"ClosureScopes:input_depth/7": $wi__input_depth && $input_depth__closures,
		"#childScope/0": $wi__input_show && _existing_scope($childScope)
	}, "__tests__/tags/tree-b.marko", 0, {
		input_show: ["input.show"],
		input_depth: ["input.depth"]
	});
});

// tags/tree-a.marko
var tree_a_default = _template("__tests__/tags/tree-a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", count)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	tree_b_default({
		show: input.show,
		depth: input.depth
	});
	_script($scope0_id, "__tests__/tags/tree-a.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/2": _write_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/tags/tree-a.marko", 0, { count: "1:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_show << 1 | $wg__input_show << 3);
	const $childScope = _peek_scope_id();
	tree_a_default({
		show: input.show,
		depth: 1
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
