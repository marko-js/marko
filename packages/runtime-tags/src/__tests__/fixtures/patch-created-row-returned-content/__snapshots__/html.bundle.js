// tags/maker.marko
const $setup = [[], []];
_shells({
	b0: "b0 !b1",
	b: "b,"
});
var maker_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	return { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>made</em>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "b1");
		_scope($scope1_id, {});
	}, $scope0_id) };
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: `a1${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `0${_w0}&b%c`)("")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)("")}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 1), $cg__input_tag = _client_guard($scope0_reason, 1), $fg__input_tag = _filled_guard($scope0_reason, 1), $cg__input_rows = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		let L = maker_default({});
		_patch_child_end();
		_dynamic_tag($scope1_id, "c", input.tag, { content: L }, 9, 0, 0, $wg__input_tag, $scope0_reason, 1);
		$cg__input_tag && _patch_write($scope1_id, "wd", L, 1);
		$cg__input_tag && _patch_render($scope1_id, "a0");
		_scope($scope1_id, {
			d: _unfilled_if($scope0_reason, 1) && L,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a1", $scope0_reason, 0);
	$fg__input_tag && $cg__input_rows && _patch_render($scope0_id, "a2", "e");
	_scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && input.tag }) || $fg__input_tag && $cg__input_rows && _patch_write($scope0_id, "xe", input.tag, !_server_guard($scope0_reason, 1));
}, 1);
